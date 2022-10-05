import React, {useState, useEffect} from 'react';
import './App.scss';
import { Card } from './components/Card';
import { getRandomPrimeNumbersPairs } from './helpers/getRandomPrimeNumbersPairs';

const App = () => {
  const [numbers, setNumbers] = useState([0]);
  const [hide, setHide] = useState(false);
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(0);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    setNumbers(getRandomPrimeNumbersPairs(16));

    const hideTimer = setTimeout(() => {
      setHide(true);
    }, 5000);

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (secondNumber === 0) {
      return;
    }

    if (firstNumber === secondNumber) {
      setMatched((prev) => [...prev, secondNumber]);
    }
  }, [secondNumber]);
  
  const onFirstClick = (num, i) => {
    if (firstNumber !== 0) {
      return;
    }

    if (matched.includes(num)) {
      return;
    }

    setFirstNumber(num);
    setFirstIndex(i);
  };

  const onSecondClick = (num, i) => {
    if (firstNumber === 0) {
      return;
    }

    if (matched.includes(num)) {
      return;
    }

    if (i === firstIndex) {
      return;
    }

    setSecondNumber(num);
    setSecondIndex(i);

    setTimeout(() => {
      setFirstNumber(0);
      setSecondNumber(0);
      setFirstIndex(0);
      setSecondIndex(0);
    }, 1000)
  };

  return (
    <div className='App'>
      <div className='App__header'>Mahjong</div>

      <div className='App__field'>
        {numbers.map((number, index) => (
          <div key={index}>
            <Card
              number={number}
              index={index}
              hide={hide}
              onFirstClick={onFirstClick}
              onSecondClick={onSecondClick}
              firstNumber={firstNumber}
              secondNumber={secondNumber}
              firstIndex={firstIndex}
              secondIndex={secondIndex}
              matched={matched}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
