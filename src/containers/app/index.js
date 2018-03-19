import React from 'react';
import Home from '../home';
import './index.css';
import { Link, Route } from 'react-router-dom';
import { Mailbox } from '../mailbox';

const App = () => (
    <div>
        <header>
            <Link to="/">Home</Link>
            <Link to="/mailbox">About</Link>
        </header>

        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/mailbox" component={Mailbox} />
            {/*<Route exact path="/mailbox/:id" component={About} />*/}
        </main>
    </div>
);

export default App;