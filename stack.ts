const prvstring = (x: number) => {
  let get: string = x.toString();
  let reverseNumber: string = get.split(" ").reverse().join("");

  return reverseNumber;
};
let numb1: number = 123456;
console.log(prvstring(numb1));

const findHighestDigit = (x: number) => {
  let maxDigit = -1;
  while (x > 0) {
    const digit = x % 10;
    if (digit > maxDigit) {
      maxDigit = digit;
    }
    x = Math.floor(x / 10);
  }
  return maxDigit;
};

let numb: number = 123456;
console.log(findHighestDigit(numb));

let findLowestNumb = (x: number) => {
  let minDigt = 1;
  while (x < 0) {
    const low = x % 10;
    if (low < minDigt) {
      minDigt = low;
    }
    x = Math.floor(x / 10);
  }
  return minDigt;
};

let numb2: number = 12345;
console.log(findLowestNumb(numb2));
