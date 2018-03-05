import React from 'react';

import './top-nav.css';


export default function TopNav(props) {
  /**
   props:
    - newGame2={() => props.newGame()}
    - showInstructions2={() => props.showInstructions()}
   */

  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            className="what" 
            href="#"
            onClick={() => props.showInstructions2()}
          >
            What?
          </a>
        </li>

        <li>
          <a 
            className="new" 
            href="#"
            onClick={() => props.newGame2()}
          >
            + New Game
          </a>

        </li>
      </ul>
    </nav>
  );
}

