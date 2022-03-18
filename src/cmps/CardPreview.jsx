import React from 'react';
import cover from '../assets/imgs/cover.png';

export const CardPreview = ({ card, handlePick }) => {
  const handleClick = () => {
    handlePick(card);
  };

  return (
    <div className='card'>
      <div>
        <img className='front' src={require(`../assets/imgs/${card.name}.png`)} />
        <img className='back' src={cover} onClick={handleClick} />
      </div>
    </div>
  );
};