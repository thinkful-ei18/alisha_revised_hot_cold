import React from 'react';

import TopNav from './top-nav';
// import InfoModal from './info-modal';

import './header.css';


export default function Header(props) {
  /**
   props:
    - newGame={() => props.dispatch(actions.createNewGame())}
    - noInstructions={() => this.noInstructions()}
   */

  return (
    <header>
      <TopNav 
        newGame2={() => props.newGame()}
        noInstructions2={() => props.noInstructions()}
      />
      {/* <InfoModal /> */}
      <h1>HOT or COLD</h1>
    </header>
  );
};
