function poem(){
    console.log("Johnny, Johnny! Yes papa? ");
    console.log("Eating sugar? No papa.");
    console.log("Telling lies? No papa.");
    console.log("Open your mouth");
    console.log("Haa Haa Haa......");
}
poem();
function random(){
    console.log(Math.floor(Math.random()*6)+1);
}
random();
 
function calAvg(a,b,c){
    return (a+b+c)/3;
}
calAvg(1,2,3);
 
function table(n){
    for(let i=1;i<=10;i++){
        console.log( n*i);
    }
}

table(6);

function ncal(n){
    return n*(n+1)/2;
}
let ram = ncal(9);
console.log(ram);
console.log(ncal(15));
 
let arr = ["hello","hi","good","bye"];
let sum ="";
function concat(arr){
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(concat(arr));


/// functions
let array_35 = [2,3,5,6,7,8];

function larger(n){
    let result =[];
    for( let i=0;i<array_35.length;i++){
    if(array_35[i]>n){
result.push(array_35[i]);
    }}
    return result;
}
let s=console.log(larger(5));

let str ="abcdabcdefgggh";
function extract(str){
    let ans ="";
    for(let i=0;i<str.length;i++){
        let curchar=str[i];
        if(ans.indexOf(curchar)==-1){
            ans+=curchar;
        }

    }
    return ans;
}
console.log(extract(str));

let country = ["australia","germany","usa"];
function largest(country){
    let ansidx =0;
    for(let i=0;i<country.length;i++){
        let anslen = country[ansidx].length;
        let currlen = country[i].length;
        if(currlen>anslen){
            ansidx=i;
        }
    }
    return country[ansidx];
}
let p= largest(country);
console.log(p);


let tea="hello world";
function vowel(tea){
 let count = 0;
    for(let i=0;i<tea.length;i++)
    {
        
        if( tea.charAt(i)=="a"||
        tea.charAt(i)=="e"||
        tea.charAt(i)=="i"||
        tea.charAt(i)=="o"||
        tea.charAt(i)=="u"){
            count++;
            }
            

    }
    return count;
}
console.log(vowel(tea));

let start = parseInt(prompt("enter the starting range"));
let end = parseInt(prompt("enter the ending range"));
function random_generator(start,end){
    Math.floor(Math.random()*(start-end))+start;
}

// functions 
const array_average =(arr_ay)=>{
    let total = 0;
    for(let number of arr_ay){
        total+= number;
    }
    return total/arr_ay.length;

}
let  arr_ay = [1,2,3,4];
console.log(array_average(arr_ay));


const even=(nc)=>{
    if(nc % 2 == 0){
        console.log(nc);
    }
    else {
        console.log("it is not even");
    }
}
let nc = 5;
console.log(even(nc));
