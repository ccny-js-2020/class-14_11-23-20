/*
  just like an array, you can loop through an object
  looping through an object has its own special syntax

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
*/
var movieObject = {
  name: "Con Air",
  starring: ["Nicolas Cage", "John Malkovich", "John Cusack"],
  year: 1997
}

//getting all the object keys
//returns an array
console.log(Object.keys(movieObject));

//looping through an object
for(var i in movieObject){
  //logging the object values
  console.log(movieObject[i]);
  //logging the object keys
  console.log(i);
}
