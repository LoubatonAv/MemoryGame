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
  const [disabled, setDisabled] = useState(false);

  const shuffleImages = () => {
    const shuffledImages = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((image) => ({ ...image, id: Math.random() }));

    setFirstPick(null);
    setSecondPick(null);
    setCards(shuffledImages);
    setSteps(0);
  };

  //handle choice
  const handlePick = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  useEffect(() => {
    if (firstPick && secondPick) {
      setDisabled(true);
      if (firstPick.name === secondPick.name) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.name === firstPick.name) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }, [firstPick, secondPick]);

  useEffect(() => {
    shuffleImages();
  }, []);

  useEffect(() => {
    isGameOver();
  }, [secondPick]);

  const isGameOver = () => {
    let result = cards.every(function (e) {
      return e.matched === true;
    });
    if (result) alert('Nice!');
  };

  const reset = () => {
    setFirstPick(null);
    setSecondPick(null);
    setSteps((prevState) => prevState + 1);
    setDisabled(false);
  };

  return (
    <div className='App'>
      <h1>League Memory Game!</h1>
      <CardList
        cards={cards}
        handlePick={handlePick}
        firstPick={firstPick}
        secondPick={secondPick}
        disabled={disabled}
        steps={steps}
      />
      <button onClick={shuffleImages} className='new-game-btn'>
        New Game
      </button>
      <div className='steps'>Turns : {steps}</div>
    </div>
  );
};
