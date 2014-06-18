/* 
Description:

The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  return (a<b)?a:b;
}
*/

function min(a, b){
  var min = Number(arguments[0]),
  len = arguments.length;
  for(len;len--;){
    var val = Number(arguments[len]);
    if(val < min || isNaN(val)){
      min = val;
    }
  }
  return min;
}