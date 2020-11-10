// document.querySelector
// - select one
// - select multiple, then select first
// eg. SELECT BY TAG NAME
let item = document.querySelector('li');
console.log(item);

// to see all the properties and functions of
// an object
// (in Python dictionaries, properties are keys)
// (in JavaScript objects, those are knowns as properties)
console.dir(item);
// --> this will tell us item is a DOM object with 
// many other properties and functions

// document.querySelectorAll
// - select all the matches
// - returns an array
let items = document.querySelectorAll('li');
console.log(items);

// optional:
// another way is:
let altItems = document.getElementsByTagName('li');
// will get all <li>
console.log(altItems);

// select by id
// use back the same syntax for the css selector
let katongLaska = document.querySelector('#must-eat');
katongLaska.style.backgroundColor = 'yellow';

// select by class
// querySelector will only select one, even if there
// are multiple results
let malayFood = document.querySelector('.malay-food');
console.log(malayFood);

// select by class BUT get all results
let allMalayFoods = document.querySelectorAll('.malay-food');
console.log(allMalayFoods);

for (let eachMalayFood of allMalayFoods) {
    eachMalayFood.style.backgroundColor = 'red';
}
