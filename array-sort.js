const serial = [1, 3, 5, 6, 36, 64, 643, 5, 32];
const serialNumber = serial
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();
console.log(serialNumber);
