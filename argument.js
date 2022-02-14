function plus() {
  console.log(arguments);
  let result = 0;
  for (const sum of arguments) {
    result += sum;
  }
  return result;
}

console.log(plus(10, 20, 50, 40, 50, 70));

function nameConacat() {
  let fullName = "";
  for (const name of arguments) {
    fullName = fullName + name + "";
  }
  return fullName;
}
console.log("Mohammad", "Marouful", "islam", "Zishan");
