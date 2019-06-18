

//foreach function
var array = ['Sabina', '10', 'Python'];
array.forEach(function(element) {
  console.log(element);
});

//map function
var array = [50, 600, 2348, 379009];
const map = array.map(y => y * 2);
console.log(map);



//filter function
var words = ['Computer', 'Media', 'HBO', 'Politics','Language'];
const result = words.filter(word => word.length < 5);

console.log(result);



//some(Any) function
var array = [10, 28, 54, 23, 78];

var even = function(element){
  return element % 4 == 0;
};
console.log(array.some(even));


//Every function
function myFunction(currValue){
  return currValue < 30;
}
var array = [10,345,6,34,76,2];
console.log(array.every(myFunction));


//Reduce function
const array1 = [60, 5, 17, 5];
const reducer = (accumulator, currValue) => accumulator + currValue;
console.log(array.reduce(reducer));
console.log(array.reduce(reducer, 3));