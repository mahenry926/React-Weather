// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Seattle', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     }, 1000 );
//   });
// }
//
// getTempPromise('Seattle').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// })

// Challenge area
function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else if (typeof a != 'number'){
      reject ('A needs to be a number');
    } else if (typeof b != 'number'){
      reject ('B needs to be a number');
    }
  });
}

addPromise( 4, 3).then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

addPromise( 'b', 3).then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});

addPromise( 4, 12).then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});
