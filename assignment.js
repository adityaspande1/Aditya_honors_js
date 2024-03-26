// 1. Write a program to find max number among two numbers passed into a function, use ternary operator to find the max number.
function max(a, b) {
    return a > b ? a : b;
}

let num1 = parseInt(prompt('Enter number 1: '));
let num2 = parseInt(prompt('Enter number 2: '));
let result = max(num1, num2);
console.log("Max number:", result);

// 2. Write a program to accept a number from user input and print whether the number is even or odd.
let number = parseInt(prompt('Enter a number: '));
if (number % 2 === 0) {
    console.log('Even');
} else {
    console.log('Odd');
}

// 3. Given a program statement console.log(2 ^ 4);, check the output and explain why it is that way.
console.log(2 ^ 4);
// Explanation: The ^ operator in JavaScript performs a bitwise XOR operation, not exponentiation. So, 2 XOR 4 is performed, which results in 6 in binary representation.

// 5. Write a program to print the table of 3.
const TABLE_OF = 3;

for (let i = 1; i <= 10; i++) {
    let result = "";
    let sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += TABLE_OF;
        if (j === 1) {
            result += `${TABLE_OF}*${j}`;
        } else {
            result += `+${TABLE_OF}`;
        }
    }
    result += `=${sum}`;
    console.log(result);
}

// 6. Write a program to calculate the sum of all even numbers from 1 to 100 using a while loop.
console.log("Sum of even numbers");
let sum = 0;
let i = 1;
while (i <= 100) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log(sum);

// 7. Write a program to print 8's table using the ** operator.
console.log("8's table");
for (let i = 1; i <= 10; i++) {
    let result = `${8}**${i} = ${8 ** i}`;
    console.log(result);
}

// 8. Write a program to create two arrays, concatenate them, and print out the resulting array.
let arr1 = [0, 2, 4, 6, 8];
let arr2 = [1, 3, 5, 7, 9];
let newArr = arr1.concat(arr2);
console.log(newArr);

// 9. Write a program to create an array of 5 cities and accept user input to check if it exists in the array.
function capitalize(str) {
    if (!str) {
        return str;
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

let cities = ["Nagpur", "Bhopal", "Delhi", "Udaipur"];
let cityName = prompt('Enter City: ');
let newStr = capitalize(cityName);
if (cities.includes(newStr)) {
    console.log(`Index of ${newStr} in the array: ${cities.indexOf(newStr)}`);
} else {
    console.log("Not Found");
}

// 10. Write a program to create an array of 8 integers and use the map function to square each element and print the results.
let numbers = [2, 3, 4, 5, 6, 7, 8];
let squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// 11. Write a program to create an array of 10 strings and return the longest string from the array.
function getLongestString(strings) {
    return strings.reduce((longest, current) => {
        return longest.length > current.length ? longest : current;
    });
}

let strings = ["Apeksha", "Nayan", "Naman", "malayalam", "abccba", "adda", "bec", "defied", "radar", "level"];
let longestString = getLongestString(strings);
console.log("Longest String:", longestString);

// 12. Write a program that creates two arrays of numbers and returns a new array containing the intersection of the two arrays.
function intersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 6, 7, 8, 9];
let intersect = intersection(array1, array2);
console.log("Intersection:", intersect);

// 13. Write a program that creates an array of numbers and returns a new array containing only unique numbers using the reduce function.
function getUniqueNumbers(arr) {
    return arr.reduce((unique, num) => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
        return unique;
    }, []);
}

const numbers = [1, 2, 3, 4, 2, 3, 5, 6, 1];
const uniqueNumbers = getUniqueNumbers(numbers);
console.log("Unique Numbers:", uniqueNumbers);

// 14. Using the spread operator, create a new object that looks exactly like the one given in the output.
const originalObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};
const newObject = { ...originalObject };
console.log("New Object:", newObject);

// 15. Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.
try {
    let undefinedObject = undefined;
    let value = undefinedObject.property;
    console.log("Value:", value);
} catch (error) {
    console.log("Error caught:", error.message);
}
