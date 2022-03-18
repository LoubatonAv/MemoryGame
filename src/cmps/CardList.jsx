import React from 'react';
import { CardPreview } from './CardPreview';

export const CardList = ({ cards, handlePick }) => {
  return (
    <div className='card-container'>
      {cards.map((card) => (
        <CardPreview card={card} key={card.id} handlePick={handlePick} />
      ))}
    </div>
  );
};
