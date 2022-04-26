// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe("windTalker", () => {
    it("takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const secretCodeWord1 = "Lackadaisical"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
    expect(windTalker(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(windTalker(secretCodeWord3)).toEqual("3cc3ntr1c")
    expect(windTalker(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    })
})

// FAIL  ./code-challenges.test.js
// windTalker
//   ✕ takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

// ● windTalker › takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0




// b) Create the function that makes the test pass.

//------------------------------ PSEUDO CODE ---------------------------

// create an arrow function called windTalker that will convert string into an interger. 
// set up a letterChanger which will convert aeio to numbers 1-4 accordingly.
// function will take in a parameter of string and use the .replace method to achieve changing letters to numbers.

const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"
let vowelChanger = {
    "a": 4,
    "e": 3,
    "i": 1,
    "o": 0,
    "A": 4,
    "E": 3,
    "I": 1,
    "O": 0,
}
const windTalker = (string) => {
    return string.replace(/[aeioAEIO]/gi, (string) => vowelChanger[string])
}
// PASS  ./code-challenges.test.js
// windTalker
//   ✓ takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("find", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"

        expect(find(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(find(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    
})
})


// b) Create the function that makes the test pass.

//------------------------- PSEUDO CODE --------------------------
// create a function called find with two paramaters of arr and letter.
// use .forEach .includes to find variables letterA and letterE
// include .toLowerCase and .toUpperCase used in two if statments to account for case sentive string
// set up an empty array and use .push to set up the new array house target words

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const letterA = "a";
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
const letterE = "e";

const find = (arr, letter) =>{
    const solution = []
    arr.forEach((word) => {
    if(word.includes(letter.toLowerCase())){
        solution.push(word)
    }
    if(word.includes(letter.toUpperCase())){
        solution.push(word)
    }
    })
    return solution
}

// PASS  ./code-challenges.test.js
// windTalker
//   ✓ takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
// find
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter
// raiseOrCall
//   ✓ takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.



describe("raiseOrCall", () => {
    it("takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
        const hand1 = [5, 5, 5, 3, 3]
        const hand2 = [5, 5, 3, 3, 4]
        const hand3 = [5, 5, 5, 5, 4]
    expect(raiseOrCall(hand1)).toEqual(true)
    expect(raiseOrCall(hand2)).toEqual(false)
    expect(raiseOrCall(hand3)).toEqual(false)
    })
})



//----------------------- PSEUDO CODE -----------------------

// create a function called raiseOrCall that takes in an array 
// create an empty array to house and use a for loop 
// use Object.values to return the arrays object values
// use OR to check to see if the array contains a full house.

// b) Create the function that makes the test pass.
const raiseOrCall = (array) => {
    let cards = {}
    for(let i of array){
    cards[i] = (cards[i] || 0) + 1;
    }
    let card= Object.values(cards);
    if((card[0] === 2 && card[1] === 3) || (card[1] === 2 && card[0] === 3)){
    return true;
    }
    return false;
}

// PASS  ./code-challenges.test.js
// windTalker
//   ✓ takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
// raiseOrCall
//   ✓ takes in an array and returns coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0