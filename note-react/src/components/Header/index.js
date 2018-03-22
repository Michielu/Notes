import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NoteButton from '../NoteButton';
import Signup from '../Signup'
import './style.css';


const Header = () => (
  <div>
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/Signup">Signup</Link>
          </li> */}
          {/* <li>
                  <Link to="/notes">notes</Link>
              </li> */}
          {/* <li>
                  <Link to="/topics">Topics</Link>
              </li> */}
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/Signup" component={signup_route} />
        <Route path="/notes" component={notes_route} />
        {/* <Route path="/topics" component={Topics} /> */}
      </div>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const signup_route = () => (
  <div>
    <Signup></Signup>
  </div>
);

const notes_route = () => (
  <div>
    <NoteButton data="none"></NoteButton>
  </div>
)

// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>

//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route
//             exact
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <h1 className="App-title">Welcome to React</h1>
//                 </header>
//                 <p className="App-intro">
//                     To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//                 <NoteButton data="none"></NoteButton>
//                 <Signup></Signup>
//             </div>
//         );
//     }
// }

export default Header;
