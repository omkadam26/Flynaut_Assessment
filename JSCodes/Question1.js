var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

// For Finding The duplicate values Using Filter()  
var duplicates = fullWordList.filter(function (value)
{
  return wordsToRemove.includes(value);
});

// For Finding The Find same values Using Include()
var sameValues = fullWordList.filter(function (value) {
  return wordsToRemove.includes(value);
});

console.log('Duplicates:', duplicates);
console.log('Same Values:', sameValues);