/* const vetor = [1, 6, 12, 8, 7, 13, 25];

console.log(vetor.reduce((acc, cur) => {
  return acc + cur
}, 0));

const vetor2 = [1, 6, 12, 8, 7, 13, 25];

console.log(vetor2
  .filter(value => value % 2 === 0)
  .reduce((acc, cur) => {
  return acc + cur
}, 0));


const vetor3 = [1, 6, 12, 8, 7, 13, 25];

console.log(vetor2
  .filter(value => value % 2 !== 0)
  .reduce((acc, cur) => {
  return acc + cur
}, 0)); */

const vetor4 = [1, 6, 12, 8, 7, 13, 25, 1, 6, 13];

const howManyTimes = (acc, value) => {
  if (!acc[value]) {
    acc[value] = 0
  }
  acc[value] = acc[value] + 1;
  return acc;
}

const result = vetor4.reduce(howManyTimes, {});
console.log(result);