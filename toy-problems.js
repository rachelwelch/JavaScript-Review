/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
var plusOneSum = [1, 2, 3, 4];
var sumInt = function(arr) {
	var newArr = [];
	var sum = 0
	for (var i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + 1);
	}
	for(var j = 0; j < newArr.length; j++) { 
		sum += newArr[j]; 
	}
	return sum;
}
sumInt(plusOneSum);




// Write a function that accepts a multi dimensional array and returns a flattened version.

var flattenArr = [1, 2, [3, [4], 5, 6], 7]; // [1, 2, 3, 4, 5, 6, 7]

var flatten = function(array) {
  var result = [], self = arguments.callee;
  array.forEach(function(item) {
    Array.prototype.push.apply(
      result,
      Array.isArray(item) ? self(item) : [item]
    );
  });
  return result;
};

flatten(flattenArr);




/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var arr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

arr.sort(function (a, b) {
        var aVals = a.match(/(\D*)(\d*)/),
            bVals = b.match(/(\D*)(\d*)/),
            weighted = [a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0, b[1] - a[1]] //[string,number]
    
        return weighted[0] - 2 * weighted[1] // give the number a double weight
    
    })


/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array 
and deleting a random element. Given these two arrays, find which element is missing in the second array.
!!!!!!!!!!!!!!!!!!!!!

*/
var notNegInt = [1, 4, 3, 6, 9, 2];
var deleteNum = function(arr) {
	var newArr = [];
	newArr.push(arr.slice());
	var randInt = Math.floor(Math.random() * newArr.length);
	for (var i = 0; i < newArr.length; i++) {
	  if (newArr[i] === randInt) {
	    newArr.splice(newArr[i], 1);
	  }
	}
	return newArr; 
}

deleteNum(notNegInt);




/*

Write a function that returns the longest word(s) from a sentence. 
The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

var longestWords = function(str) {
	str = str.split(" ");
	var longest = [];
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i].length === count) {
			longest.push(str[i]);
		} else if (str[i].length >= count) {
			longest = [];
			count = str[i].length;
			longest.push(str[i]);
		}
	}
	return longest;
}

longestWords("You are just an old antidisestablishmentarian");
longestWords("I gave a present to my parents");
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo");

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences.  !!!!!!!!!!!!!
For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
var string = 'tree traversal';
var fn = function(str) {
	str.split('');
	return str;
}

fn(string);



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

var outside = function(a, b) {
	if (a, b) {
		return a + b;
	} else {
	function inside(b) {
		return a + b;
	}
}
	return inside;
}
console.log(outside(2,3));
console.log(outside(2)(3));






