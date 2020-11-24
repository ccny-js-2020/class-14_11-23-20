/*
  Let can be redefined
  Replace "var" with "let" if you declare a variable that might or will be re-assigned
*/
let word = "word";
console.log(word)
word = "bird";
console.log(word);

/*
  Const can't be redefined
  Replace "var" with "const" if you declare a variable that wont be re-assigned
*/
const song = "butterfly";
console.log(song)
song = "caterpillar";
console.log(song);

/*
  Note: i dont see a problem with var.
        You can still use it
        This is just good to know since its used in the industry
*/
