import React from 'react';
import ReactDOM from 'react-dom';

//1. Get the Provider and createStore functions
//notice how we call it using named exports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
//2. create your reducers
import reducers from './reducers';


//3. Wrapped the App Component with the Provider Component from react-redux that we import then on the
// Provider Component pass in the constant props named store
//4. Pass the createStore functions inside the props named store and put reducers as first argument
ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <App />
    </Provider>,
    document.querySelector('#root')
);