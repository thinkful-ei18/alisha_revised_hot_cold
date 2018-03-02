import React from 'react';

import TopNav from './top-nav';
// import InfoModal from './info-modal';

import './header.css';


export default function Header(props) {
  /**
   props:
    - restart={() => this.restartGame()}
    - noInstructions={() => this.noInstructions()}
   */

  return (
    <header>
      <TopNav 
        restart2={() => props.restart()}
        noInstructions2={() => props.noInstructions()}
      />
      {/* <InfoModal /> */}
      <h1>HOT or COLD</h1>
    </header>
  );
};
