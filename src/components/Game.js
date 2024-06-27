
import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import './Grid.css';


const initialGrid = [
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'E', 'W'],
  ['W', ' ', 'W', 'W', 'W', ' ', 'W', ' ', ' ', 'W'],
  ['W', ' ', ' ', ' ', 'W', ' ', 'W', ' ', ' ', 'W'],
  ['W', 'W', 'W', ' ', 'W', ' ', 'W', ' ', ' ', 'W'],
  ['W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
  ['W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'W'],
  ['W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
  ['W', ' ', 'W', 'W', 'W', 'W', ' ', ' ', ' ', 'W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
];

const Game = () => {
  const [grid, setGrid] = useState(initialGrid);
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });

  const handleKeyPress = (event) => {
    let newX = playerPosition.x;
    let newY = playerPosition.y;

    switch (event.key) {
      case 'ArrowUp':
        newY -= 1;
        break;
      case 'ArrowDown':
        newY += 1;
        break;
      case 'ArrowLeft':
        newX -= 1;
        break;
      case 'ArrowRight':
        newX += 1;
        break;
      default:
        break;
    }

    if (grid[newY][newX] !== 'W') {
      setPlayerPosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [playerPosition]);

  return (
    <div>
      <h1 className='crawler'>Dungeon Crawler</h1>
      <Grid grid={grid} playerPosition={playerPosition} />
    </div>
  );
};

export default Game;
