function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();
  let h1= document.querySelector("h1");
  function colorchange(color,delay,nextcolorchange){
    setTimeout(()=>{ h1.style.color = color;
    if(nextcolorchange) {nextcolorchange();}},delay);
  }

  colorchange("red",1000,()=>{
    colorchange("green",1000);
  })