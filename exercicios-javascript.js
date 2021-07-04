const vetor = [1, 6, 12, 8, 7, 13, 25];

console.log(vetor.reduce((prev, acc) => {
  return prev + acc
}, 0));