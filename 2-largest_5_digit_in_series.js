/*
Description:

In the following 6 digit number:

283910
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found within within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net

*/

function solution(digits){
  var i = digits.length - 4;
  var largest = 0;
  for(i;i--;){
     var num = digits.slice(i,i+5);
     if(num > largest){
       largest = Number(num);
     }
  }
  return largest;
}