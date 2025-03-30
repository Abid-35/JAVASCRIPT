//2nd week assignment
//1st qujestion
let num =prompt("enter the number");
if(num%10==0){
    console.log("it is a good number");
}
else {
    console.log("it is not a good number");
}
//2nd question
let name = prompt("enter the name ");
let age = prompt("enter the age ");
alert(`${name} is ${age} years old`);
//3rd questin
let quater = prompt("enter the quater");
switch(quater){
    case "one":
    console.log("jan,feb,mar");
    break;
    case "two":
    console.log("apr,may,jun");
    break;
    case "three":
    console.log("jul,aug,sep");
    break;
    case "four":
    console.log("oct,nov,dec");
    break;
    default:
    console.log("limit is 4 "); 
    
}
// 4th  question
let word  = prompt("enter the word");
if(word[0]=='a'||word[0]=='A'&&word.length==5){
 console.log("it is a golden string");   
}
else{
    console.log("it is not a golden string");

}
//5th question
let a = parseInt(prompt("enter the 1st number"));
let b = parseInt(prompt("enter the 2nd number"));
let c = parseInt(prompt("enter the 3rd number"));
if (a>b) {
    if(a>c) {
        console.log("a is the largest  number");
    }
        else {
            console.log("c is the largest  number");
        }
    }
    
        else {
            if(b>c){
                console.log("b is largest number");

            }
            else{
                console.log("c is largest number");
            }
            
        }
    
//6th question
let number1 = parseInt(prompt("Enter the 1st number"));
let number2 = parseInt(prompt("Enter the 2nd number"));

if (number1 % 10 === number2 % 10) {
    console.log("Last digits are the same");
} else {
    console.log("Last digits are not the same");
}
//practise question
let array = ["january","july","march","august"];
array.shift();
array.shift();
console.log("array  is the ; " , array);
array.unshift("june");
array.unshift("july");
console.log("array  is the ; " , array);
// 3rd week assinment question 
let arr= [6,7,8,2];
let n = 3;
let old = arr.slice(0,n);
console.log(old);
let box = prompt("enter the string");
if(box.length===0){
    console.log("it is the empty string");
}
else{
    console.log("it is not a empty string");
}
let array_69 = prompt("Enter the data");
console.log(`It is the original one: ${array_69}`);
console.log(`It is the trimmed one: ${array_69.trim()}`);
let elem = [20,30,40,50];
 let m = 30;
 if (elem.indexOf(m)!=-1)
 { 
     console.log("it is in the array");
 }
 else{
     console.log("it is not in array");
 }




