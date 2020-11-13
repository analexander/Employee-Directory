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
}