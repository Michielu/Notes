import React, { Component } from 'react';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.createUser = this.createUser.bind(this);

    }

    async createUser() {
        console.log("button pressed");

    }

    render() {
        return (
            <div>
                <form>
                    <h5>Username</h5><br />
                    <input type="text" name="username" />
                    <h5>Password</h5><br />
                    <input type="text" name="password1" />
                    <h5>Retype Password</h5><br />
                    <input type="text" name="password2" />
                    <div className="populate-users">
                        <p className="text-users">{this.state.data}</p>
                    </div>
                    <button onClick={() => { this.createUser() }}>Create Users</button>
                </form>
            </div>
        );
    }
}