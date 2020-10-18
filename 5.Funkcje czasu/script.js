//Zadanie 1

let i = 0;
const time = setInterval(function(){ 
  i++;
  console.log("Cześć po raz " + i);
  
  if(i >= 15) {
    clearInterval(time);
  }
}, 3000);


//Zadanie 2

var table=[3,4,7,2,16,32,62,35,124]

setTimeout(()=>{
for(let i=0;i<table.length;i++){
    console.log(table[i]);
}
let i = 0;
    var inter = setInterval(() => {
    
        console.log(table[i]);
    i++
        if (i >=table.length) {
            clearInterval(inter);
        }},3000)
},2000)
