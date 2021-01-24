// Zadanie 1

const divs = document.querySelectorAll('.more-divs');

function listOfDivs(paramArr) {
    let newArray = [];
    
    for (let i = 0; i < paramArr.length; i++) {
        newArray.push(paramArr[i].tagName);
    }
    return newArray;
}

console.log(listOfDivs(divs));

 


//Zadanie 2 

var shortList = document.getElementsByClassName("short-list")[0];

function showData(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}

showData(shortList);



//Zadanie 3

const numbersDataset = document.getElementById('datasetCheck');
const thirdTask = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberone)
    const secondNumber = parseInt(takeNumbers.dataset.numbertwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(thirdTask(numbersDataset));

 

//Zadanie 4

document.getElementById("spanText").innerText =  "some text";

 

//Zadanie 5

document.getElementById("spanText").className =  "some class";

 


//Zadanie 6

var element = document.getElementById("classes");
var list = element.classList;

 

var concat = [];
for (let i = 0; i< list.length; i++)
    {
        concat.push(list[i]);
        console.log(list[i]);
    }
console.log(concat.join('+'));
element.className = '';

 

//Zadanie 7

const list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {

    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })
}
const result = addAttributes(list);

 

//Zadanie 8

function zad8(className) {
    let obj = {newClass: className};
    zad8_1(obj);
}

function zad8_1(obj) {
    let zmienna = obj.newClass;
    document.getElementById('myDiv').className = zmienna;
}

zad8('string_z_parametru');

 

//Zadanie 9

function addClass(param){
    param = parseInt(param);
    const numbers = document.querySelector("#numbers");
    if(param %2===0){
        numbers.className = "even";
    }
    else{
        numbers.className = "odd";
    }
    
}
var randomNum = Math.floor(Math.random() * 11);
addClass(randomNum)
