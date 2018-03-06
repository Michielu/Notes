import React, { Component } from 'react';
import NoteButton from '../NoteButton';
import Signup from '../Signup'
import './style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], text: "" };

    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
        </p>
                <NoteButton data="none"></NoteButton>
                <Signup></Signup>
            </div>
        );
    }
}

export default App;
