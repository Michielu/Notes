import React, { Component } from 'react';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.checkPasswords = this.checkPasswords.bind(this);
        this.hashPassword = this.hashPassword.bind(this);

    }

    checkPasswords() {
        console.log("button pressed");
        const form = document.getElementById('signup-form');
        console.log("form:", form.elements[0].value)
        const username = form.elements[0].value;
        const password1 = form.elements[1].value;
        const password2 = form.elements[2].value;
        console.log("form:", form.elements[0].value, form.elements[1].value, form.elements[2].value);
        //TODO stop it from refreshing

        if (password1 === password2) {
            console.log("Same Passwrods");
            this.hashPassword(password1);
        }
        else {
            console.log("Different passwords!")
            this.setState({
                username: username,
                pass: "invalid"
            })
        }
    }

    hashPassword(pass) {
        console.log("in here! ");
        //After hashing, create account with it! 
    }



    render() {
        return (
            <div>
                <form id="signup-form">
                    <h5>Username</h5><br />
                    <input type="text" name="username" value={this.state.username} />
                    <h5>Password</h5><br />
                    <input type="text" name="password1" value={this.state.pass} />
                    <h5>Retype Password</h5><br />
                    <input type="text" name="password2" value={this.state.pass} />
                    <div className="populate-users">
                        <p className="text-users">{this.state.data}</p>
                    </div>
                    <button onClick={() => { this.checkPasswords() }}>Create Users</button>
                </form>
            </div>
        );
    }
}