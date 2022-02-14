const products = [
  " hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "1X59  laptop commercial yoga laptop Dell",
  "LG supernova laptop",
  "Htc low price Phone",
  "purple color phone with Laptop",
];

//index of
const searching = "Dell";
const output = [];
for (const product of products) {
  //   console.log(product);
  // if (
  //   product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1
  // ) {
  //   output.push(product);
  // }
}
//console.log(output);

// includes dea searching

// product.toLocaleLowerCase().includes(searching.toLocaleLowerCase()) != -1
// // problem != not equal dile kaj korena kn
// for (const product of products) {
//   if (product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())) {
//     output.push(product);
//   }
// }
// console.log(output);

//start with

for (const product of products) {
  if (product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase())) {
    output.push(product);
  }
}
// console.log(output);
for (const product of products) {
  if (product.toLocaleLowerCase().endsWith(searching.toLocaleLowerCase())) {
    output.push(product);
  }
}
console.log(output);
