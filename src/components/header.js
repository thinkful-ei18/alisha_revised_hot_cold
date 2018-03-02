import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
  /**
   props:
    - restart={() => this.restartGame()}
   */

  return (
    <header>
      <TopNav 
        restart2={() => props.restart()}
      />
      {/* <InfoModal /> */}
      <h1>HOT or COLD</h1>
    </header>
  );
};
