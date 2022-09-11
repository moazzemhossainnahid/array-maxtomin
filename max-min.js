var num = [2, 4, 6, 8, 10]

num.sort((a, b) => a-b);

for (var i = 0; i < num.length; i+=2) {
  num.splice(i, 0, num.pop());
}

console.log(num);