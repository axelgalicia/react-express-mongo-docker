"use strict";
/**
 * Defines Express Route for User Model
 *
 * @author [Axel Galicia](https://github.com/axelgalicia)
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("./user.controller"));
var router = express_1.default.Router();
exports.userRouter = router;
/**
 *
 * Gets all Users with filter options
 *
 * GET /api/users
 *
 * @param req Http Request
 * @param res Http Response
 * @param next Next Function
 * @returns {UserDoc[]} Returns the list of all UserDoc[]
 *
 */
router.get('/api/users', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                users = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_controller_1.default.findAllUsers(req.query)];
            case 2:
                users = _a.sent();
                return [2 /*return*/, res.send(users)];
            case 3:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
/**
 *
 * Inserts a new user
 *
 * POST /api/users
 *
 * @param req Http Request
 * @param res Http Response
 * @param next Next Function
 * @returns {UserDoc} Returns the new UserDoc added
 *
 */
router.post('/api/users', [], function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_controller_1.default.createUser(req.body)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, res.status(200).send(user)];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * Inserts an array of users
 *
 *
 * POST /api/users/bulk
 *
 * @param req Http Request
 * @param res Http Response
 * @param next Next Function
 * @returns {any}
 *
 */
router.post('/api/users/bulk', [], function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var usersSaved, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_controller_1.default.insertBulkUsers(req.body)];
            case 1:
                usersSaved = _a.sent();
                return [2 /*return*/, res.status(200).send(usersSaved)];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 *  Deletes all users on the database
 * -- Testing purposes --
 *
 * DELETE /api/users
 *
 * @param req Http Request
 * @param res Http Response
 * @param next Next Function
 * @returns {Void}
 *
 */
router.delete('/api/users', [], function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, user_controller_1.default.deleteAllUsers()];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(204).send()];
            case 2:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 *
 * Starts loading the data contained in /opt/data
 *
 * -- Testing purposes --
 *
 * GET /api/users/autoload
 *
 * @param req Http Request
 * @param res Http Response
 * @param next Next Function
 * @returns {UserDoc[]} Returns the list of all UserDoc[]
 *
 */
router.get('/api/users/autoload', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var inserted, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inserted = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_controller_1.default.loadData()];
            case 2:
                inserted = _a.sent();
                return [2 /*return*/, res.send(inserted)];
            case 3:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
