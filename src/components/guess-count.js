import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
    /*
    props:
        - count={props.guessList.length}
    */

    return (
      <p className="count">
        Guess # <span id="count">{props.count}</span>!
      </p>
    );
}
