let add = function (a, b) {
  return a + b;
};

console.log(add);
console.log(add(8, 8));
add();

const abc = function () {
  console.log("hello world");
};

// Arrow function

const addarrow = (a, b) => {
  console.log(" i am arrow function");
};

const Addarrow = (a, b) => a + b;
console.log(Addarrow(5, 5));
