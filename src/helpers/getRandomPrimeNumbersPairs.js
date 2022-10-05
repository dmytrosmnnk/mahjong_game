import { getPrimeNumbers } from './getPrimeNumbers';

export const getRandomPrimeNumbersPairs = (maxQuantity) => {
  const numbers = getPrimeNumbers(maxQuantity);
  const numbersPairs = [...numbers, ...numbers];
  const result = [...numbersPairs];

  for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      let temp = result[i];
      result[i] = result[j];
      result[j] = temp;
  }

  return result;
};
