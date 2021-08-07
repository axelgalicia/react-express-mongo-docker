
import React from 'react';
import _ from 'lodash'

import { Container, Header, Divider, Segment, Icon, List, Dimmer, Loader, Image, Pagination, Table, Grid, Button, Statistic } from 'semantic-ui-react';
import UsersData from './UsersData/UsersData';


// const tableData = [
//     {
//         firstName: "Nova",
//         lastName: "Bruen",
//         countryCode: "BR",
//         email: "Jordi6@yahoo.com",
//         dob: "1972-07-21T04:18:44.159Z",
//         mfa: "null",
//         amt: 654974669,
//         createdDate: "2020-07-26T15:01:34.395Z",
//         referredBy: null
//     },
//     {
//         firstName: "Axel",
//         lastName: "Romeo",
//         countryCode: "MX",
//         email: "aaaxelmanoa@gmail.com",
//         dob: "1988-07-21T04:18:44.159Z",
//         mfa: "SMS",
//         amt: 999223,
//         createdDate: "20218-002-26T15:01:34.395Z",
//         referredBy: "Team@gmail.com"
//     },
// ]

// function exampleReducer(state: any, action: any) {
//     switch (action.type) {
//         case 'CHANGE_SORT':
//             if (state.column === action.column) {
//                 return {
//                     ...state,
//                     data: state.data.slice().reverse(),
//                     direction:
//                         state.direction === 'ascending' ? 'descending' : 'ascending',
//                 }
//             }

//             return {
//                 column: action.column,
//                 data: _.sortBy(state.data, [action.column]),
//                 direction: 'ascending',
//             }
//         default:
//             throw new Error()
//     }
// }



const UsersDashboard = () => {


    // const [state, dispatch] = React.useReducer(exampleReducer, {
    //     column: null,
    //     data: tableData,
    //     direction: null,
    // })
    // const { column, data, direction } = state


    return (

        <UsersData/>


    //   <Grid centered padded='vertically'>
    //     <Grid.Column width={12}>
    //       <Container fluid />
    //     </Grid.Column>
    //   </Grid>


    //   <Grid centered padded='horizontally'>
    //     <Grid.Column width={14}>

    //       <Container fluid>
    //         <Container textAlign='center'>
    //           <Icon
    //             float='center'
    //             color='blue'
    //             name='search'
    //             size='massive'
    //           ></Icon>
    //         </Container>

    //         <Header
    //           color='blue'
    //           textAlign='center'
    //           as='h1'
    //           content='Ledn Users Search'
    //           subheader="Token holder's accounts"
    //         />

    //         <Container textAlign='left'>
    //           <List>
    //             <List.Item>
    //               <List.Icon name='users' />
    //               <List.Content>Axel Galicia</List.Content>
    //             </List.Item>
    //             <List.Item>
    //               <List.Icon name='marker' />
    //               <List.Content>Toronto, ON. Canada</List.Content>
    //             </List.Item>
    //             <List.Item>
    //               <List.Icon name='mail' />
    //               <List.Content>
    //                 <a href='mailto:axelgalicia@gmail.com'>axelgalicia@gmail.com</a>
    //               </List.Content>
    //             </List.Item>
    //             <List.Item>
    //               <List.Icon name='linkify' />
    //               <List.Content>
    //                 <a href='https://axel.today' target='_blank' rel="noreferrer">axel.today</a>
    //               </List.Content>
    //             </List.Item>
    //           </List>
    //         </Container>

    //         <Divider />


    //         <UsersSection></UsersSection>





    //         <Segment color='blue'>
    //           <Header as='h3' color='blue'>Searching fields</Header>
    //           <Divider section />

    //           <Header as='h3'>Filtering</Header>
    //           <Divider section />

    //           <Header as='h3'>Sorting</Header>
    //           <Divider section />
    //         </Segment>


    //         <Segment color='blue'>
    //           <Header as='h3' color='blue'>Results</Header>
    //           <Divider section />




    //           <Table sortable celled compact='very' collapsing size='small'>
    //             <Table.Header>
    //               <Table.Row>
    //                 <Table.HeaderCell
    //                   sorted={column === 'firstName' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'firstName' })}
    //                 >
    //                   First Name
    //                 </Table.HeaderCell>

    //                 <Table.HeaderCell
    //                   sorted={column === 'lastName' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'lastName' })}
    //                 >
    //                   Last Name
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'countryCode' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'countryCode' })}
    //                 >
    //                   Country Code
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'email' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'email' })}
    //                 >
    //                   Email
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'dob' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'dob' })}
    //                 >
    //                   Date of Birth
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'mfa' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'mfa' })}
    //                 >
    //                   MFA
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'amt' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'amt' })}
    //                 >
    //                   Amount
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'gender' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'createdDate' })}
    //                 >
    //                   CreatedDate
    //                 </Table.HeaderCell>


    //                 <Table.HeaderCell
    //                   sorted={column === 'referredBy' ? direction : null}
    //                   onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'referredBy' })}
    //                 >
    //                   Referred By
    //                 </Table.HeaderCell>
    //               </Table.Row>
    //             </Table.Header>
    //             <Table.Body>
    //               {data.map(({ firstName, lastName, countryCode, email, dob, mfa, amt, createdDate, referredBy }: any) => (
    //                 <Table.Row key={email}>
    //                   <Table.Cell>{firstName}</Table.Cell>
    //                   <Table.Cell>{lastName}</Table.Cell>
    //                   <Table.Cell>{countryCode}</Table.Cell>
    //                   <Table.Cell>{email}</Table.Cell>
    //                   <Table.Cell>{dob}</Table.Cell>
    //                   <Table.Cell>{mfa}</Table.Cell>
    //                   <Table.Cell>{amt}</Table.Cell>
    //                   <Table.Cell>{createdDate}</Table.Cell>
    //                   <Table.Cell>{referredBy}</Table.Cell>
    //                 </Table.Row>
    //               ))}
    //             </Table.Body>
    //           </Table>





    //           <Segment>
    //             <Dimmer active inverted>
    //               <Loader size='large'>Loading</Loader>
    //             </Dimmer>

    //             <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
    //           </Segment>


    //           <Container textAlign='center'>
    //             <Pagination defaultActivePage={1} totalPages={5} />
    //           </Container>

    //         </Segment>
    //       </Container>

    //     </Grid.Column>
    //   </Grid>
    );
}

export default UsersDashboard;