console.log("hello world");
let a =6;
let b=3;
console.log("sum is :",a+b);
console.log(3+4);
console.log("the total price is:",2+3,"rupees");
let op = "the total price is:"+(2+3)+"rupees";
console.log(op);
let output=`the total price is ; ${a+b} rupees`;
console.log(output);
let n=5;
let o=7;
//arthimetic operatop
console.log(n+o);
console.log(n-o);
console.log(n*o);
console.log(n/o);
console.log(n%o);
console.log(n**o);
//unrnary operator
console.log(n++);
console.log(++n);
//assignment operator
n=o;
console.log(n);
let age = 10; 
let num = 5;  
age += num;   
console.log(age);
age*=num;
console.log(age);
console.log(num);
//Pratice question
let colour="red";
if (colour=="red"){
    console.log("stop now");
}
if(colour=="green"){
    console.log("go on");
};
if(colour=="yellow"){
    console.log("Go slow");
}
// practice question 2
let cus_price = 'l';
if(cus_price==='xl'){
    console.log("price is 250");

}
else if(cus_price==='l'){
    console.log("price is 200");
}
else if(cus_price==='m'){
    console.log("price is 150");
}
else if(cus_price==='s'){
    console.log("price is 50");
}    
//Practice question 3
let string="good";
if(string[0]==='a'&&string.length>3){
    console.log("it is a good string");
}
else{
console.log("it is not a good string ");
}
//switch statement
let day = 10;
switch(day){
    case 1:
        console.log("it is monday");
        break;
        case 2:
        console.log("it is tuesday");
        break;
        case 3:
        console.log("it is wednesday");
        break;
        case  4:
        console.log("it is thursday");
        break;
        case 5:
        console.log("it is friday");
        break;
        case 6:
        console.log("it is saturday");
        break;
        case 7:
        console.log("it is sunday");
        break;
        default:
            console.log("provide correct data");
}
// apna college
let array = "apnA college";
let hi = 3;
if (array[hi] == array[hi].toLowerCase()){
    console.log("it is lower case");
}
else {
    console.log("it not a lower case");
}
