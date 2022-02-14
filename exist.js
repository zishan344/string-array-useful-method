function func(friends) {
  let mega = [0];
  if (Array.isArray(friends) == false) {
    return "pls provai an array";
  }
  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  return mega;
}
const friends = ["marouf", "rakib rahman", "rahim", "sabbir"];
// console.log(func(friends));

if (friends.indexOf("marouf") != -1) {
  //   console.log("marouf is exist");
}
if (friends.includes("rakib rahman")) {
  //   console.log("rakib is exist");
}

const first = [1, 2, 3, 4, 5];
const second = [6, 7, 8, 9, 10];
const result = first.concat(second);
console.log(result);
