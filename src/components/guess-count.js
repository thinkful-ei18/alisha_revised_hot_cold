import React from 'react';
import './guess-count.css';

export default function GuessCount(props) {
    /*
    props:
        - count={this.state.guessNumber}
    */

    return (
      <p className="count">
        Guess # <span id="count">{props.count}</span>!
      </p>
    );
}
