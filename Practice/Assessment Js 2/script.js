// * Javascript Assessment 1 :-

// (Q-1) Explain what a callback function is and provide a simple example.

// function modifyArray(arr, callback) {
//     // do something to arr here
//     arr.push(100);
//     // Then execute the callback function that was passed .
//     callback();
// }
// var arr = [1, 2, 3, 4, 5];
// modifyArray (arr, function (){
//     console.log("array has been modified", arr);
// })  



// (Q-2) Given a string, reverse each word in the sentence problem.

// -----> For example welcome to this Javascript Guide ! should be become emocleN ot sihttpircsavaJ ! ediuG

// var string = "Welcome to this Javascript Guide!";

// // Output becomes !ediug tpircsavaJsiht ot emocleN
// var reverseEntireSentence = reverseBySeparator (string, "");

// // output becomes emocleN ot sihttpircsavaJ ! ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, "")

// function reverseBySeparator (string, separator){
//     return string.split(separator).reverse().join(separator);
// }



// (Q-3) How to check if an object is an array or not ? provide some code.

// var arrayList = [1, 2, 3];
// function greet(param) {
//     if () {
//         // Here have to check whether param is array or not
//     } else {

//     }
// }

// function greet(param) {
//     if (typeof param === 'string') {

//     } else {
//         // if param is of type array then this block of code would execute.
//     }
// }

// if (Object.prototype.toString.call(arrayList) === '[Object, Array]') {
//     console.log('Array!');
// }

// if ($.isArray(arrayList)) {
//     console.log('Array');
// } else {
//     console.log('Not an array');
// }




// (Q-4) How to empty an array in Javascript ?
// Problem

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
// How could we empty the array above ?

// Method 1
// arrayList = [];

// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];                 // create array
// var anotherArrayList = arrayList;                               // Referenced arrayList by another variable.

// arrayList = [];                                         // Empty the array.
// console.log(anotherArrayList);




// (Q-5) How should you check if a number is an integer ?

// function isInt (num){
//     return num % 1 === 0;
// }
// console.log(isInt(4));                  // true
// console.log(isInt(12.2));               // false
// console.log(isInt(0.3));                // false





// (Q-6) FizzBuzz challenge :

// Check out this version of FizzBuzz :

// for (let i = 1; i <= 100; i++) {
//     let f = i % 3 == 0;
//     b = i % 5 == 0;

// }
// console.log(f ? 'FizzBuzz' : 'Fizz'): b ? 'Buzz' : i;





// (Q-7) Given two strings, return true if they one anagrams of one another ?
// problem : Mary is an anagram of army.

// var firstword = "Mary";
// var secondword = "Army";

// isAnagram (firstword.secondword);       // true

// function isAnagram(first, second){
//     var a = first.toLowerCase();
//     var b = second.toLowerCase();

//     a = a.split ("").sort().join ("");
//     b = b.split ("").sort().join ("");
//     return a === b;
// }






// (Q-8) What will be the output of the following code ?
// problem :
            // var y = 1;
            // if(function f (){}){
            //     y += typeof f;
            // }
            // console.log(y);


// var k = 1;
// if (1){
//     eval (function foo(){});
//     k += typeof foo;
// }
// console.log(k);

// var k = 1;
// if (1){
//     function foo(){};
//     k += typeof foo;
// }
// console.log(k);                 // output :- 1function.





// (Q-9) What will the following code output ?
// problem :
            // (function(){
            //     var a = b = 5;
            // }) ();
            // console.log(b);


// var a = b = 5;
// var a = b;
// b = 5;




// (Q-10) Write a function that would allow you to do this.
// Multiply (5) (6);

function Multiply (a){
    return function (b){
        return a * b;
    }
}
Multiply (5)(6);