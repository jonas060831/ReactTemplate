import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//history
import history from '../history';

//components
import LandingPage from '../components/pages/main/LandingPage';

class App extends Component {

    render(){
        return (
            <div>
                <Router history={ history } >
                    <Switch>
                        {/* UNPROTECTED ROUTES */}
                            <Route path="/" exact component={LandingPage} />

                        {/* AUTHENTICATED ROUTES */}

                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
