import React from 'react';
import ReactDOM from 'react-dom';

//1. Get the Provider and createStore functions
//notice how we call it using named exports
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//components
import App from './components/App';
//2. create your reducers
import reducers from './reducers';

//3. redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={ store }>
    <App />
    </Provider>,
    document.querySelector('#root')
);