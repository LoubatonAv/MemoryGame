import React from 'react';
import { CardPreview } from './CardPreview';

export const CardList = ({ cards, handlePick, firstPick, secondPick }) => {
  return (
    <div className='card-container'>
      {cards.map((card) => (
        <CardPreview
          card={card}
          key={card.id}
          handlePick={handlePick}
          flipped={card === firstPick || card === secondPick || card.matched}
        />
      ))}
    </div>
  );
};
