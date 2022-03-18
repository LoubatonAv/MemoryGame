import React, { useEffect, useState } from 'react';
import { CardList } from '../cmps/CardList';

const images = [
  { name: 'Ahri', matched: false },
  { name: 'Akshan', matched: false },
  { name: 'Kaisa', matched: false },
  { name: 'Evelynn', matched: false },
  { name: 'Tryndamere', matched: false },
  { name: 'Irelia', matched: false },
];

export const MemoryPage = () => {
  const [cards, setCards] = useState([]);
  const [steps, setSteps] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);

  const shuffleImages = () => {
    const shuffledImages = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));
    setCards(shuffledImages);
    setSteps(0);
  };

  //handle choice
  const handlePick = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.name === secondPick.name) {
        console.log('Match!');
        reset();
      } else {
        console.log('Dont match');
        reset();
      }
    }
  }, [firstPick, secondPick]);

  const reset = () => {
    setFirstPick(null);
    setSecondPick(null);
  };

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleImages} className='new-game-btn'>
        New Game
      </button>
      <CardList cards={cards} handlePick={handlePick} />
    </div>
  );
};
