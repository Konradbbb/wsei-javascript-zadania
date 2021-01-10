
//Zadanie 1 

var btn = document.querySelector('#test-event');
btn.addEventListener("click", function (event) {
 
  console.log(event.type);
});

btn.addEventListener("mouseover", function (event) {
  
  console.log(event.type);
});

addEventListener("mousemove", function (event){
  
  console.log(event.type);
});

addEventListener("keypress", function (event){

  console.log(event.type);
});

addEventListener("scroll", function (event){

  console.log(event.type);
});

document.querySelector('#input-test').addEventListener("change", function (event){

  console.log(event.type);
});

 
 


//Zadanie 2

let span = document.querySelector("#span-ex2");

document.querySelector("#ex2").addEventListener("click", e => {
    span.innerHTML = e.target.getAttribute("data-text");
});




//Zadanie 3

 const three = (el) => {
    document.getElementById(el).addEventListener('mouseover', (a)=>{
        a.target.style.backgroundColor = 'blue'
    })
      document.getElementById(el).addEventListener('mouseout', (a)=>{
        a.target.style.backgroundColor = 'red'
    })
}
three('ex3');

 

//Zadanie 4

const inputError = document.querySelector('#ex3-err');
const input = document.querySelector('#input-test');
input.addEventListener('keyup', (e) => {
    const reg = /[0-9]/gm;
    const checkIfNumber = e.target.value.match(reg);
    if (checkIfNumber !== null) {
        inputError.innerText = 'You cannot enter numbers here';
    } else {
        inputError.innerText = '';
    }
});



 

//Zadanie 5

const divEx5 = document.getElementById('ex5');
const buttonEx5 = document.getElementById('ex5-button');
let numberOfClick = 0
buttonEx5.addEventListener('click', function count() {
    numberOfClick++
    if(numberOfClick ==  10) {
        buttonEx5.removeEventListener('click', count)
    }
    else {
        divEx5.innerHTML = numberOfClick
    }
})

 

//Zadanie 6
 

  function whiteOrRedColor() {
    document.addEventListener('scroll', (event) => {
        var where = window.scrollY;
        var body = document.querySelector('body');
        
        if (where > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}
whiteOrRedColor()

 

//Zadanie 7


var input = document.querySelector("div#calculator > input");
var buttons = document.querySelectorAll("div#calculator button");
var number = 0;
var number2 = 0;
 

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(this.innerText === '+'){
            input.value = number + number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '-'){
            input.value = number - number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '*'){
            input.value = number * number2;
            number = 0;
            number2 = 0;
        } else if(this.innerText === '/'){
            input.value = number /number2;
            number = 0;
            number2 = 0;
        } else {
            if(number === 0){
                input.value = '';
                number = Number(this.innerText);
            } else {
                number2 = Number(this.innerText);
            }
            
        }
        
        
    })
}
