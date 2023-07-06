
const word = '00000111110101001111100001001';

const longestChain = word.split('0') // Split the word by 0s
  .reduce((maxChain, currentChain) => {
    return currentChain.length > maxChain.length ? currentChain : maxChain;
  }, '');

console.log('Longest Chain:', longestChain);