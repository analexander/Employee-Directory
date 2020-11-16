// import React, {Component} from 'react'
// import API from '../utils/API'

// class DataTable extends Component {
//     state = {
//         users: [],
//         img: [],
//         name: [],
//         phone: [],
//         email: [],
//         dob: [],
//     }

//     componentDidMount() {
//         API.getUsers().then(res => {
//             this.setState({
//                 users: res.data.results
//             })
//             this.populateUserInfo();
//         })
//     }

//     populateUserInfo() {
//               this.state.users.map((user) => 
//         <li key={user.id}></li>
//               );
//     }
            

//   render() {
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>DOB</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{this.state.img}</td>
//             <td>{this.state.name}</td>
//             <td>{this.state.phone}</td>
//             <td>{this.state.email}</td>
//             <td>{this.state.dob}</td>
//           </tr>
//           <tr>
//             <td>Mac</td>
//             <td>Bouncer</td>
//           </tr>
//           <tr>
//             <td>Dee</td>
//             <td>Aspiring actress</td>
//           </tr>
//           <tr>
//             <td>Dennis</td>
//             <td>Bartender</td>
//           </tr>
//         </tbody>
//       </table>
//     )
//   }
// }

// export default DataTable

import React from "react";
import DataBody from "./DataBody";
//import "../styles/DataTables.css";

function DataTable({ headings, users, handleSort }) {
    return (
        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{width}}
                                    onClick={() => {
                                        handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
            
            <DataBody users={users} />
            </table>
        </div>
    );
}

export default DataTable;