// let fav_mov = "ONE PIECE";
// let guess = prompt("guess the my favourite movie name");
// while((guess!=fav_mov)&&(guess!="quit")){
//     console.log("it is not  corect");
//     guess = prompt("guess correctly");
// }
// let array =["apple","pineappple","mango","candle"];
// for (i=0;i<=array.length;i++){
//     console.log(i , array[i]);
// }
// assignment 4
let arr =  [1,3,4,2,5,6,2,3];
let num = 2;
for(let i=0;i<arr.length;i++){
if (num==arr[i]){
    arr.splice(i,1);
    console.log(arr);
}
}
 let number ="2817154";
 let count = 0;
 while(count!=number.length){
    count++;
    console.log(count);
 }

 let number_1 = 12345;
 let sum = 0;
 let digit;
 let copy_1= number_1;
 while(copy_1>0){;
     digit = copy_1 % 10 ;
    sum+=digit;
copy_1 =Math.floor(copy_1/10);
}
console.log(sum);

let n = 5;
let fact = 1;
let m = 1;
while(m<=n){
    fact *= m;
    m++;
}
console.log(fact);

let arr_1 = [1,2,3,4,50];
let largest =0;
for(let i=0;i<=arr_1.length;i++)
{
    if(largest < arr_1[i]){
        largest = arr_1[i];
    }
}
console.log(largest);
// guessing game
let numb = parseInt(prompt("enter the max range of the prompt"));
let rand = Math.floor(Math.random()*numb)+1;
let guess = parseInt(prompt("guess the genrated number "));
while(true){
    if(guess=="quit"){
        console.log("you are quiting");
        break;
    }
    if(guess==rand){
        console.log("your guess is right",rand);
        break;
    }
    else if(guess<rand){
        guess = parseInt(prompt("your guess is to  small "));
    }
    else{
        guess =parseInt(prompt("your guess is to  large"));
    }
}
const car ={
        car_name:"maruthi",
        colour:"red",
        model:"latest",   
};
 console.log(car.car_name);

 const person ={
    name : "abid",
    age:21,
    city:"viskhapatnam",
 };
 person.city="chirala";
 person.country="india";
 console.log(person);





  


 
