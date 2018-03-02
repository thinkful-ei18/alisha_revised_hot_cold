
/* REACT */
// import './reset.css';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import './reset.css';
// import './index.css';

// import Game from './components/game';

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );



/* REDUX */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './components/game';
import store from './store';
import * as actions from './actions';

import './index.css';

store.dispatch(actions.currentGuess(40));
console.log(store.getState());
store.dispatch(actions.currentGuess(50));
console.log(store.getState());


ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);