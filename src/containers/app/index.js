import React from 'react';
import Home from '../home';
import Mailbox from '../mailbox';
import './index.css';
import { Link, Route } from 'react-router-dom';
import { loadProfile } from '../actions/userProfile';
import { loadMailList } from '../actions/mailList';

const App = ({store}) => (
    <div>
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
            <a className={"navbar-brand"} href="/">Navbar</a>

            <div className={"collapse navbar-collapse"}>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item active"}>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className={'container'}>
            <main>
                <Route exact path="/" component={Home} onEnter={loadProfile(store)} />
                <Route exact path="/mailbox" component={Mailbox} onEnter={loadMailList(store)}/>
            </main>
        </div>
    </div>
);

export default App;