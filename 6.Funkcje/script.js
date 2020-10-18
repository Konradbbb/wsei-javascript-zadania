//Zadanie 1

function printString() {
    console.log("Udało się!");
}

printString();



//Zadanie 2
function printParam(str) {
    console.log(str);
}

printParam('anyx');



//Zadanie 3
const exampleArray = ["bla", "add", "fsa"];

function returnArray(array) {
    
  return array;
}

console.log(returnArray(exampleArray));



//Zadanie 4
function printStr(str) {
    let counter = 1;
    let timer = setInterval(function () {
        if (counter < 5) {
            console.log(str);
            counter++;
        } else {
            clearInterval(timer);
            console.log("Koniec");
        }
    }, 3000);
}

printStr("We all live in a yellow submarine")
