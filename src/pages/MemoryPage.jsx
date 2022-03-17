import React, { useState } from 'react';

const images = [
  { src: './src/assets/imgs/ahri.jpg' },
  { src: './src/assets/imgs/evelynn.jpg' },
  { src: './src/assets/imgs/kaisa.jpg' },
  { src: './src/assets/imgs/akshan.jpg' },
];

export const MemoryPage = () => {
  const [cards, setCards] = useState([]);
  const [steps, setSteps] = useState(0);

  const shuffleImages = () => {
    const shuffledImages = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));
    setCards(shuffledImages);
    setSteps(0);
  };

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleImages} className='new-game-btn'>
        New Game
      </button>
    </div>
  );
};
