import React from 'react';

import TopNav from './top-nav';
// import InfoModal from './info-modal';

import './header.css';


export default function Header(props) {
  /**
   props:
    - newGame={() => props.dispatch(actions.createNewGame())}
    - showInstructions={() => props.dispatch(actions.showInstructions())}
   */

  return (
    <header>
      <TopNav 
        newGame2={() => props.newGame()}
        showInstructions2={() => props.showInstructions()}
      />
      {/* <InfoModal /> */}
      <h1>HOT or COLD</h1>
    </header>
  );
};
