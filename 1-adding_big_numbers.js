/*

Description:

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example

add("123", "321"); -> "444"
add("11", "99"); -> "110"

Starting code
function add(a, b) {}

*/

function add(a, b) {
  var max = Math.max(a.length,b.length);
  
  if(max < 33){
    return String(Number(a) + Number(b));
  }
  
  var arrA = a.split("").reverse();
  var arrB = b.split("").reverse();
  var arrTotal = [];
  
  function add(start, end){
    var total, valA, ValB;
    
    for(var i = start; i < end; i++){
      total = Number(arrTotal[i]) || 0;
      valA = Number(arrA[i]) || 0;
      valB = Number(arrB[i]) || 0;
      
      total = total + valA + valB;
      
      if(total > 9){
        total = total - 10;
        arrTotal[i+1] = 1;
      }
      
      arrTotal[i] = total;
        
    }
  };
  
  
  var iterations = Math.ceil(max / 31);
  
  for(var i = 0; i < iterations; i++){
    var start = i*31,
    end = start + 31;
    
    add(start, end);
   
  }
  
  return arrTotal.reverse().join('').replace(/^0+/, '');
}