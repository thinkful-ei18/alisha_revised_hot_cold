
/* ======= REACT-REDUX SETUP======= */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './components/game';
import store from './store';

import './reset.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);



/* ======= SIMULATED GAME  ======= */

// import * as actions from './actions';

// store.dispatch(actions.createNewGame(Math.floor(Math.random() * Math.floor(100))))
// console.log(store.getState());

// store.dispatch(actions.currentGuess(10));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(20));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(30));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(40));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(50));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(60));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(70));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(80));
// console.log(store.getState());
// store.dispatch(actions.currentGuess(90));
// console.log(store.getState());

// store.dispatch(actions.createNewGame(Math.floor(Math.random() * Math.floor(100))))
// console.log(store.getState());
