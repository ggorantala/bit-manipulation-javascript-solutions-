const RightShift = (number, i) => {
  return number >> i;
}

const number = 100;
console.log(`${number} shifted 1 position left, yields to " ${RightShift(number, 1)}`);
console.log(`${number} shifted 1 position left, yields to " ${RightShift(number, 2)}`);
console.log(`${number} shifted 1 position left, yields to " ${RightShift(number, 3)}`);
console.log(`${number} shifted 1 position left, yields to " ${RightShift(number, 4)}`);
