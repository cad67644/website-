/*
@Caden Watson 2019
This program computes the quadratic formula on the input values
*/
function gcf_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
}
function solveQuadratic(a, b, c){
let calcDiscriminant = Math.pow(b, 2) - 4 * a * c; // Math.pow(b, 2) same as b squared

let answer1 = (-b + Math.sqrt(calcDiscriminant)) / (2 * a);
let answer2 = (-b - Math.sqrt(calcDiscriminant)) / (2 * a);
 

  return {
    "answer":"{ "+ answer1 + ", " + answer2 +" }",
    "discriminant": calcDiscriminant,
    "answer1": answer1,
    "answer2": answer2,
    "gcf":false,
    "c": c
  } ;
}


$('#button').click(function(){

const val = $('#input').val();
const nums = val.split(" ");
 let equation;

  equation = nums[0]+"x^2 + "+ nums[1]+"x "+ solveQuadratic(nums[0],nums[1],nums[2]).c.toString()+" = 0";
  
if(solveQuadratic(nums[0],nums[1],nums[2]).discriminant === 0){
  // Checks if discrimenent = 0 (to see if their is only one answer) and acts acordingly
  $('#text').text("One Solution: " + solveQuadratic(nums[0],nums[1],nums[2]).answer1);
   $('#discrimenent').text("Discriminant: "+solveQuadratic(nums[0],nums[1],nums[2]).discriminant);
  
}else if(solveQuadratic(nums[0],nums[1],nums[2]).answer === "{ NaN, NaN }"&&solveQuadratic(nums[0],nums[1],nums[2]).discriminant === "NaN"){
  // Checks to make sure the values that the person entered are valid
$('#text').text("Values \""+val+"\" not Valid. Please type an a value followed by a space then a b value followed by a space then a c value");
  
}else if(solveQuadratic(nums[0],nums[1],nums[2]).answer === "{ NaN, NaN }"){
  // Checks if the solve Quadratics returns NotaNumber (NaN) to check if the descrimenent is negative ( real solutions) 
  $('#text').text("Solution: 0 Real Solutions");
  $('#discrimenent').text("Discriminant: "+solveQuadratic(nums[0],nums[1],nums[2]).discriminant);
  
}else{
  // Asuming that there is 2 answers and completes the quadratic normaly
  $('#text').text("Solution: "+solveQuadratic(nums[0],nums[1],nums[2]).answer);
  $('#discrimenent').text("Discriminant: "+solveQuadratic(nums[0],nums[1],nums[2]).discriminant);
}
});

