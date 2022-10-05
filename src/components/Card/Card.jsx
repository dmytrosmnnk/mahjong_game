import React, {useState, useEffect} from 'react';
import './Card.scss';
import classNames from 'classnames';

export const Card = ({
  number,
  index,
  hide,
  onFirstClick,
  onSecondClick,
  firstNumber,
  secondNumber,
  firstIndex,
  secondIndex,
  matched,
}) => {
  return (
    <div
      className={classNames('Card', 'noselect', {
        hidden: hide,
        open:
          (firstNumber === number && firstIndex === index) ||
          (secondNumber === number && secondIndex === index),
        isMatched: matched.includes(number),
      })}
      onClick={() => {
        onFirstClick(number, index);
        onSecondClick(number, index);
      }}
    >
      {number}
    </div>
  );
};
