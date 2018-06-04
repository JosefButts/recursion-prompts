// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
    let current = n;

    if (n < 0) {
        return null
    }
    else if (n === 0) {
        return 1;
    }
    else {
        //current -= 1;
        return n * factorial(n - 1);
    }

    return factorial(n);
};


console.log(factorial(0));


// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, /* array1 = array.slice(0)*/ ) {
    return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
    // // console.log(array); 
    // //console.log(array1);
    // if (array1.length === 1) {
    //     // console.log(array);
    //     return array1[0];

    // }
    // else if (array1.length === 0) {
    //     return 0;
    // }
    // else {
    //     //console.log(array);
    //     return array1.pop() + sum(array1);
    //     //returns last element in array + all others until array is 1 long.

    // }




};

var arrayTest = [1, 2, 3, 4, 5, 6];
console.log(sum(arrayTest));


// not required but we worked it out in class
// // 3. Sum all numbers in an array containing nested arrays.
// // Example: arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function(array) {};

// 4. Check if a number is even.
var isEven = function(n) {

    if (n < 0) {
        n = Math.abs(n);
    }
    if (n === 0) {
        return true;
    }
    else if (n === 1) {
        return false;
    }
    else {
        return isEven(n - 2);
    }


};
//console.log(isEven(33));

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n > -1) {
        if (n === 0) {
            return n;
        }
        else {
            return n - 1 + sumBelow(n - 1);
        }
    }
    else {
        if (n === 0) {
            return n;
        }
        else {
            return n + 1 + sumBelow(n + 1);
        }

    }
};

//sumBelow(-10);

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {

    if (x === y || x - y === 1 || y - x === 1) {
        return [];
    }
    else if (x < y) {
        if (y - x === 2)
        // if this is true there will only be 1 digit in the range
        {
            return [x + 1];
        } // if array has no numbers in the range return empty array
        else {

            // var list = range(x, y - 1);
            // list.push(y - 1);
            // return list;
            return range(x,y-1).concat(y-1);
        }
    } //handles the range when x is greater than Y
    else if (x > y) {
        if (x - y === 2)
        // if this is true there will only be 1 digit in the range
        {
            return [y + 1];
        } // if array has no numbers in the range return empty array
        else {
            // var list = range(x, y + 1);
            // list.push(y + 1);
            // return list;
            return range(x,y+1).concat(y+
            1);
        }
    }



};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

    if (exp === 0) {
        return 1;
    }

    else if (exp === 2) {
        return (base * base);
    }
    //account for negative exponent??
    else if (exp < 0) {
        return exponent(base, exp + 1) / base;
    }
    //below is for positive exponent
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

    //using division
    if (n === 1) {
        return true;
    }
    else if (n === 0 || n % 2 !== 0) {
        return false;
    }
    else {
        return powerOfTwo(n / 2);
    }
    //using bitwaise operator and subtraction
    //but NO RECURSION
    //return (n & (n-1)) === 0;


};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if (string.length === 0) {
        return string;
    }
    return reverse(string.slice(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(inputString) {

    let string = inputString.toLowerCase().trim();
    if (string.length === 0 || string.length === 1) {
        return true;
    }
    else if (string[0] === string[string.length - 1]) {
        return palindrome(string.slice(1, string.length - 1));
    }

    return false;

};

// 11. Write a function that returns the remainder of x divided by y without using the
//not required
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// var modulo = function(x, y) {

//     if (x === 0) {
//         return x;
//     }
//     else if (x === y) {
//         return 0;
//     }
//     else if (x < y) {
//         return x;
//     }
//     else if (x < 0 && y < 0) {
//         return x;

//     }
//     else if (x > y) {
//         // console.log(x,y);
//         return modulo(x - y, y);
//     }
//     // if (x === y) {
//     //     return 0;
//     // }
//     // else if (x === 0) {
//     //     return 0;
//     // }
//     // else if (x < y) {
//     //     return x;
//     // }
//     // else if (x > y) {
//     //     // console.log(x,y);
//     //     return modulo(x - y, y);
//     // }

// };

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {

    if (x === 0 || y === 0) {
        return 0;
    }
    else if (y === 1) {
        return x;
    }
    else if (x > 0 && y > 0) {
        return x + multiply(x, y - 1);
    }
    else if (x < 0 && y < 0) {
        return (-x + multiply(x, y + 1));
    }
    else if (x < 0 && y > 0) {
        return x + multiply(x, y - 1);
    }
};

// // 13. Write a function that divides two numbers without using the / operator  or
// // JavaScript's Math object.
// var divide = function(x, y) {};

// // 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// // integers is the greatest integer that divides both x and y with no remainder.
// // Example:  gcd(4,36);  // 4
// // http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// // https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
// var gcd = function(x, y) {};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

    let string1 = str1.toLowerCase(); //.trim();
    let string2 = str2.toLowerCase(); //.trim();


    // if we get this far either both are empty strings or we've whittled down to all matches


    if (string1[0] !== string2[0]) {
        return false;
    }
    else if (string1.length === 0 && string2.length === 0) {
        //console.log('yo');
        return true;
    }
    else if (string1[0] === string2[0]) {
        return compareStr(string1.slice(1), string2.slice(1));
    }

    //return true;

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, strArray = [], count = 0) {
    if (str.length === count) {
        return strArray;
    }
    else {

        strArray.push(str[count]);
        //count++;
        console.log(str, strArray, count)
        return createArray(str, strArray, count + 1);

    }




    //return [];
};

// 17. Reverse the order of an array
var reverseArr = function(array, revArray = [], count = 0) {

    if (array.length === count) {
        return revArray;
    }
    else {

        revArray.unshift(array[count]);
        console.log(revArray);
        return reverseArr(array, revArray, count + 1);
    }


};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, array = []) {
    if (array.length === length) {
        return array;
    }
    else {
        array.push(value);
        return buildList(value, length, array);

    }

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, occurCount = 0) {
    if (array.length === 0) {
        return occurCount;
    }
    else if (array[0] === value) {
        occurCount += 1;
    }

    return countOccurrence(array.slice(1), value, occurCount);

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, newMap = []) {

    if (array.length === 0) {
        return newMap;
    }
    else {
        newMap.push(callback(array[0]))
        return rMap(array.slice(1), callback, newMap);
    }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {


};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) {
        return null;
    }
    else if (n < 2) {
        return n;
    }
    else {

        return nthFibo(n - 1) + nthFibo(n - 2);
    }

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, counter = 0) {

    let capArray = input.slice(0);
    if (capArray.length === counter) {
        return capArray;
    }
    else {

        capArray[counter] = input[counter].toUpperCase();
        return capitalizeWords(capArray, counter + 1);
    }



};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, counter = 0) {


    let capArray = array.slice(0);
    if (capArray.length === counter) {
        return capArray;
    }
    else {
        let element = capArray[counter];
        capArray[counter] = element[0].toUpperCase() + element.slice(1);
        return capitalizeFirst(capArray, counter + 1);
    }


};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {};

// 30. Given a string, return an object containing tallies of each letter.
var letterTally = function(str, obj) {
    //if obj is falsey, create a letter key for each unique letter
    if (!obj) {
        obj = {};
        let letterList = str.split("");
        //create a list of unique letters for the key
        let keyList = letterList.filter(function(letter, index, array) {
                return array.indexOf(letter) === index;
            }

        );
        //iterate through unique values and create a key/value pair in
        //obj to make the tallies

        keyList.forEach(function(letter) {
            obj[letter] = 0;
        });
    }
    if (str.length === 0) {
        return obj;
    }
    // recursively iterate through str then update object
    for (var key in obj) {
        if (key === str[0]) {
            obj[key] = obj[key] + 1;
            return letterTally(str.slice(1), obj);
        }
    }


};
// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, compressedList = [], count = 0) {
    // debugger;
    //
    //non recursive way to generate a list of unique elements
    // if (!elementList){
    //     let elementList = list.filter(function(value, index, array) {
    //         return array.indexOf(value) === index;
    //     }).length;

    // }

    if (count === list.length) {
        return compressedList;
    }
    else {
        if (list[count] !== list[count + 1]) {

            compressedList.push(list[count]);
            //  return compress(list, compressedList, count + 1);
        }
        else {

            // return compress(list, compressedList, count + 1);
        }
        return compress(list, compressedList, count + 1);
    }


};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, minZeroArray = [], count = 0) {

    //non-recursive way
    // let compArray = array.filter( function(element, index, array){
    //   return element !== 0 || element === 0 && array[index+1] !== 0;
    // })
    console.log(array);
    // return compArray;

    //recursive way:
    if (array.length === count) {


        return minZeroArray;
    }
    else if (array[count] !== 0 || array[count] === 0 && array[count + 1] !== 0) {

        minZeroArray.push(array[count]);

    }

    return minimizeZeroes(array, minZeroArray, count + 1);



};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, count = 1) {
    console.log(array);
    //base case
    if (count === array.length) {
        return array;
    } //if first element negative make it positive
    else if (array[0] < 0) {
        array[0] *= -1;

    }
    else if (count % 2 === 0 && array[count] < 0) {
        array[count] *= -1;
        return alternateSign(array, count + 1);
    }
    else if (count % 2 !== 0 && array[count] > 0) {
        array[count] *= -1;

        return alternateSign(array, count + 1);
    }



    return alternateSign(array, count + 1);
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, obj, count = 0) {

    str = str.split(" ");

    //creates an object that contains a key-value pair for each digit and word name

    if (!obj) {
        obj = {
            zero: '0',
            one: '1',
            two: '2',
            three: '3',
            four: '4',
            five: '5',
            six: '6',
            seven: '7',
            eight: '8',
            nine: '9'
        }
    }
    // base case
    if (str.length === count) {
        return str.join(' ');
    }
    //iterate through keys of obj
    for (var key in obj) {
        //determine if the current key's value matches the current array element
        if (obj[key] === str[count]) {
            //console.log(key, str[count]);
            str[count] = key;
            //console.log(str);
        }
    }
    //convert array back to string and then call numToText with updates string
    //undoubtedly not the most efficient implentation but it works
    str = str.join(' ');
    return numToText(str, obj, count + 1);

};

numToText("I have 5 dogs and 6 ponies");


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
}
// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {};
