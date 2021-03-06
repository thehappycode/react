import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './components/redux/redux-hook/store';
import './index.css';
//import App from './components/redux/redux-hook/App';
//import store from './components/redux/todo-app/redux/store';
//import TodoApp from './components/redux/todo-app/TodoApp';
// import App from './App';
// import App from './components/hooks/hooks-at-a-glance';
// import App from './components/hooks/using-the-state-hook';
// import App from './components/hooks/using-the-effect-hook';
import App from './components/hooks/demo';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
