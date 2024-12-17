import React, { useState } from 'react';

// Define props type for the Square component
interface SquareProps {
  value: string;
}

// Square component with TypeScript props
function Square({ value }: SquareProps) {
  function handleClick() {
    console.log('click ', value);
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

// Board component
export default function Board() {
  return (
    <>
      <div className="board-row" >
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      < div className="board-row" >
        <Square value="5" />
        <Square value="6" />
        <Square value="4" />
      </div>
      < div className="board-row" >
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}
