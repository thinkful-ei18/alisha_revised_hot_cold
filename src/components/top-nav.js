import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
  /**
   props:
    - restart2={() => props.restart()}
   */

  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            className="what" 
            href="#"
          >
            What?
          </a>
        </li>

        <li>
          <a 
            className="new" 
            href="#"
            onClick={() => props.restart2()}
          >
            + New Game
          </a>

        </li>
      </ul>
    </nav>
  );
}

