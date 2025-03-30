let btn = document.querySelector("button");
btn.addEventListener("click",function(){
let heading = document.querySelector("h1");
let random = generator();
heading.innerText = random;
let box = document.querySelector("div");
box.style.backgroundColor=random;
console.log("colour is updated");
})
function generator(){
let red = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);
let colour = `rgb(${red} ${green} ${blue})`;
return colour;
}
