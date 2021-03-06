/**
 * Defines the controller for the User object.
 * 
 * @author [Axel Galicia](https://github.com/axelgalicia)
 */

import { UserDoc, User } from "./user.model";
import Joi from 'joi';
import Filter, { IUserQueryFilters } from "./user.filter";
import jsonFile from 'jsonfile';


const FIRST_NAME_INPUT_FIELD = "First Name";
const LAST_NAME_INPUT_FIELD = "Last Name";
const COUNTRY_INPUT_FIELD = "Country";
const REFERRED_BY_INPUT_FIELD = "ReferredBy";


interface IUserInput {
    [FIRST_NAME_INPUT_FIELD]: string;
    [LAST_NAME_INPUT_FIELD]: string;
    [COUNTRY_INPUT_FIELD]: string;
    email: string;
    dob: string;
    mfa?: string;
    amt: number;
    createdDate: string;
    [REFERRED_BY_INPUT_FIELD]?: string;
}

interface IUserListResponse {
    totalRecords: number;
    pageCount: number;
    pageSize: number;
    currentPage: number;
    records: UserDoc[];
}

interface IUserStatistics {
    activeUsers: number;
}

const userInputSchema = Joi.object({
    [FIRST_NAME_INPUT_FIELD]: Joi.string().required(),
    [LAST_NAME_INPUT_FIELD]: Joi.string().required(),
    [COUNTRY_INPUT_FIELD]: Joi.string().alphanum().min(2).max(4).required(),
    email: Joi.string().email().required(),
    dob: Joi.date().required(),
    mfa: Joi.string(),
    amt: Joi.number().min(0).required(),
    createdDate: Joi.date().required(),
    [REFERRED_BY_INPUT_FIELD]: Joi.string().allow(null),
});


/**
 * Converts IUserInput to IUser
 * 
 * @param {IUserInput} userInput The user's input from request 
 * @param {Joi.Schema} userInputSchema The schema against to validate input
 * @return {IUser} Returns a new User object mapped
 */
const buildFromInput = (userInput: IUserInput, userInputSchema: Joi.Schema): UserDoc => {
    Joi.assert(userInput, userInputSchema);
    const { email, mfa, amt } = userInput;
    const firstName = userInput[FIRST_NAME_INPUT_FIELD];
    const lastName = userInput[LAST_NAME_INPUT_FIELD];
    const countryCode = userInput[COUNTRY_INPUT_FIELD];
    const referredBy = userInput[REFERRED_BY_INPUT_FIELD];
    const dob = Date.parse(userInput.dob);
    const createdDate = Date.parse(userInput.createdDate);

    return new User({ firstName, lastName, countryCode, email, dob, mfa, amt, createdDate, referredBy });
}

/**
 * Queries User collection statistics
 * 
 * @returns {IUserStatistics} Returns the User collection statistics
 */
const findUserStatisctics = async (): Promise<IUserStatistics> => {

    let statistics: IUserStatistics = {
        activeUsers: 0
    };

    try {
        statistics.activeUsers = await User.countDocuments();
    } catch (error) {
        throw error;
    }

    return statistics;
}



/**
 * Queries User collection
 * 
 * 
 * @param {IUserInput} userInput IUserInput object to be inserted into the db
 * @returns {UserDoc[]} Returns the array of UserDocs matching the query
 */
const findAllUsers = async (filters: IUserQueryFilters): Promise<IUserListResponse> => {

    let response: IUserListResponse = {
        totalRecords: 0,
        pageSize: 0,
        pageCount: 0,
        currentPage: 1,
        records: [],
    };

    try {

        let query = User.find();
        // Like Filters
        Filter.filterLikeBy('firstName', filters, query);
        Filter.filterLikeBy('lastName', filters, query);

        // Exact Match
        Filter.filterByEquals('countryCode', filters, query);
        Filter.filterByEquals('mfa', filters, query);

        // Sorting
        Filter.sortBy(filters.sortBy, query);

        // Used to know total of pages
        const totalBeforePagination: number = (await query.exec()).length;

        // Pagination
        Filter.addPagination(filters, query);

        const records: UserDoc[] = await query.exec();
        const pageSize: number = Filter.getPageSize(filters);
        const pageNumber: number = Filter.getPageNumber(filters);

        response.totalRecords = totalBeforePagination;
        response.pageCount = Math.ceil(totalBeforePagination / pageSize);
        response.pageSize = pageSize;
        response.currentPage = pageNumber;
        response.records = records;

    } catch (error) {
        throw error;
    }

    return response;
}

/**
 * Inserts a bulk array of IUserInput objects into the db
 * If record already exists based on unique key, this will
 * be skipped but the response will refer that record as not
 * inseted due to duplicate key.
 * 
 * @param {IUserInput[]} userInputs Array of IUserInput to insert into the db
 * @returns {any} Returs MongoDB report of insertions
 */
const insertBulkUsers = async (userInputs: IUserInput[]): Promise<any> => {
    try {
        const mappedUsers: UserDoc[] = userInputs.map(userInput => {
            return buildFromInput(userInput, userInputSchema);
        });

        return User.insertMany(mappedUsers, { ordered: false, rawResult: true })
            .then(data => {
                return data;
            }).catch(error => {
                return error;
            });
    } catch (error) {
        throw error;
    }
}


/**
 * Inserts a IUserInput object to the db
 * 
 * 
 * @param {IUserInput} userInput IUserInput object to be inserted into the db
 * @returns {UserDoc} Returs the inserted UserDoc object including _Id
 */
const createUser = async (userInput: IUserInput): Promise<UserDoc> => {
    let newUserDoc: UserDoc = new User();
    try {
        const userDoc: UserDoc = buildFromInput(userInput, userInputSchema);
        newUserDoc = await User.create(userDoc);
    } catch (error) {
        throw error;
    }
    return newUserDoc;
}

/**
 * Deletes all users in the collection users
 * 
 * -- TESTING PURPOSES --
 * 
 * @param {IUserInput} userInput IUserInput object to be inserted into the db
 * @returns {UserDoc} Returs the inserted UserDoc object including _Id
 */
const deleteAllUsers = async (): Promise<void> => {
    try {
        await User.deleteMany();
    } catch (error) {
        throw error;
    }
}


/**
 * Tries to load the data from accounts.json contained on /opt/data
 * 
 * -- TESTING PURPOSES --
 * 
 */
const loadData = async (): Promise<any> => {
    try {
        return jsonFile.readFile('/opt/data/accounts.json')
            .then(async data => {
                return await insertBulkUsers(data);
            })
            .catch(error => { throw error; });

    } catch (error) {
        throw error;
    }
}


export default {
    findUserStatisctics,
    createUser,
    insertBulkUsers,
    deleteAllUsers,
    findAllUsers,
    loadData
}