import React, { Component } from 'react';
import getUsers from './retreiveInfo';

export default class PopulateData extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.populate_user = this.populate_user.bind(this);

    }

    async populate_user() {
        console.log("button pressed");
        let users = await getUsers();
        console.log("Users : ", users);
        this.setState({
            data: users
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.populate_user() }}>Get Users</button>
                <div className="populate-users">
                    <p className="text-users">{this.state.data}</p>
                </div>
            </div>
        );
    }
}