export const getPrimeNumbers = (primesQuantity) => {
  const primeNumbers = [2];
  
  for (let i = 3; i < 100; i += 2) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers.slice(0, primesQuantity);
};
