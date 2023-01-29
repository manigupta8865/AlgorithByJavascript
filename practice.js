
function maxSumOfThreeElement(arr,elementCount){
    let maxSum=0;
    let tempSum=0;
    for(let value of arr.slice(0,elementCount)){
        maxSum += value
    }
    tempSum=maxSum;
    for(let i=elementCount;i<arr.length;i++){
        tempSum = tempSum - arr[i-elementCount] + arr[i] 
        maxSum =  Math.max(tempSum,maxSum)
    }
    return maxSum;
}
let arr=[1,8,4,6,8,-2,3,45,4,6,8,4,200]
console.log(maxSumOfThreeElement(arr,3))



/*
Frequency Counter - validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
*/
function validAnagram(arr1,arr2){
    if(arr1.length !==arr2.length){
        return false
    }
    let looker={};
    for(let val of arr1){
        looker[val] = (looker[val] || 0) + 1
    }
    for(let value of arr2){
        if(!(looker[value])){
            return false
        }
            else {
            looker[value] -= 1
        }
        }
        return true
    
}
console.log(validAnagram('acr', 'carr'))



/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false 
*/
function sameFrequency(num1,num2){
    if(num1.toString().length != num2.toString().length) return false
    let frequencyCounter1={};
    let frequencyCounter2={};
    for(let value of num1.toString()){
        frequencyCounter1[value]=(frequencyCounter1[value] || 0) + 1
    }
    for(let value of num2.toString()){
         frequencyCounter2[value]=(frequencyCounter2[value] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2) || frequencyCounter1[key] != frequencyCounter2[key]){
            return false
        }
    }
    return true
}
console.log(sameFrequency(3589578, 5879385))



/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:
areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
*/
function areThereDuplicates(...args){
    let frequencyCounter1={};
    for(let value of args){
        frequencyCounter1[value]=(frequencyCounter1[value] || 0) + 1;
    }
     for(let key in frequencyCounter1){
        if(frequencyCounter1[key]===2){
          return true
        }
    }
    return false
}
console.log(areThereDuplicates(1,2,3,4,4))






/*Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}
console.log(averagePair([5,5,5,5,6,6],5))




/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/
function isSubsequence(str1,str2){
    let i=0;
    let j=0;
    while(j<str2.length){
        if(str1[i]===str2[j]){
            i++
        }
        if(i===str1.length){
            return true
        }
        j++
    }
    return false
}

console.log(isSubsequence("gupta","manigumapnita"))
let s1="amnbnd"
let s2=s1.slice();
console.log(s1===s2)
