import React, { Component } from 'react';
import DataTable from './DataTable';
import Nav from './Nav';
import API from '../utils/API';
import '../styles/DataArea.css';

export default class DataArea extends Component {
    state = {
        users: [{}],
        order: 'descend',
        filteredUsers: [{}]
    }

    // array of headings (img, name, phone, email, dob)

    // sort function for ascending and descending state (order) with setState

    // function for comparing ascending/descending order by name
        // include missing values, numerical

    // create variable of sortedUsers, filter through filteredUsers with above function

    // handleSearchChange event (input)

    //componentDidMount function with API call promise, setting state users and filteredUsers with results

    //render() with handleSearchChange callback in Nav
        // DataTable with headings, users (filteredUsers), and handleSort (handleSort callback)
        
}