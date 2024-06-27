
import React from 'react';
import './Grid.css';

const Grid = ({ grid, playerPosition }) => {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div
            key={`${rowIndex}-${cellIndex}`}
            className={`cell ${
              cell === 'W' ? 'wall' : 
              cell === 'E' ? 'enemy' :
              playerPosition.x === cellIndex && playerPosition.y === rowIndex ? 'player' : 'empty'
            }`}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
