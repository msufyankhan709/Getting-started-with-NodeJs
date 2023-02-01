const number=10;

if(number>12){
    console.log("Greater number");
}
else if(number<12){
    console.log("Lower number");
}
setInterval(()=>{
    console.log("Hello");
},1000)

// using modules
const sayHi=require('./functions')
sayHi('Hello')