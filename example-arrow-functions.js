// var names = ['Matt', 'Jason', 'Jess', 'Kray'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// })
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Matt'));
//
// var person = {
//   name: 'Matt',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();


function add(a, b) {
  return a + b;
}

// addStatement
var addStatement = (a,b) => {
  return a+b;
}
console.log(addStatement(4,7));
console.log(addStatement(2,7));

//addExpression
var addExpression = (a, b) => a+b;

console.log(addStatement(4,7));
console.log(addStatement(2,7));


// console.log( add(1,2));
// console.log( add(5,2));
