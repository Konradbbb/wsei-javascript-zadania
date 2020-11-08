//Zadanie 1

let table = [1,2,3]
console.log(table);

//Zadanie 2
var array = ["One", 2,3,4,5,"Six"];
//1
console.log(array[0], array[1])
//2
console.log(array[array.length-1])
//3
console.log(array)
//4
console.log(array.filter((x,i)=> i %2 ))
//5
console.log(array.filter((x,i)=>{
    return typeof(x) == "string"
}))
//6 
console.log(array.filter((x,i)=>{
    return typeof(x) == "number"
}))



//Zadanie 3
let exampleArray = [1, 3, 7, 66, 462, 754];
//1
let counter = 0;
exampleArray.forEach((elem, i )=>{
    counter += elem;
})
console.log(counter);
//2
let counter1 = 0;
exampleArray.forEach((elem, i )=>{
        counter1 -= elem;
})
console.log(counter1);

//3
let exampleArray = [1, 3, 7, 66, 462, 754];
//1
let counter = 0;
exampleArray.forEach((elem, i )=>{
    counter += elem;
})
console.log(counter);
//2
let counter1 = 0;
exampleArray.forEach((elem, i )=>{
        counter1 -= elem;
})
console.log(counter1);

//3
exampleArray.forEach((elem, i )=>{
        counter += elem;
})
console.log(counter / exampleArray.length);

//4
exampleArray.forEach((elem, i) =>{
    if (elem % 2 == 0) console.log(elem);
})

//5
exampleArray.forEach((elem, i) =>{
    if (elem % 2 != 0) console.log(elem);
})

//6
var max = 0;
for (let i = 0; i < exampleArray.length; i++){
    if (max <= exampleArray[i]){
        max = exampleArray[i];
    }
}
console.log('max: ', max);

//7
var min = exampleArray[0];
for (let i = 0; i < exampleArray.length; i++){
    if (exampleArray[i] < min){
        min = exampleArray[i];
    }
}
console.log('min: ', min)

//8
console.log(exampleArray.reverse());





//Zadanie 4
let table = [1,2,3]

function example(table) {
  let sum = 0;
  table.forEach((elem, i )=>{
    sum += elem;
  })
    console.log(sum)
}

example(table);

//Zadanie 5
const func = (arr) =>{
    // getting average
    let ave = (arr.reduce((a,b)=>a+b/arr.length))
    let new_arr = arr.map((x) => x*ave)
    console.log('aaa', new_arr)
}
func([1,2,3,4])


//Zadanie 6

const func = (arr) =>{
    let sum = 0;
    let counter = 0;
    arr.forEach((elem, i ) => {
        if(elem % 2 == 0){
          sum += elem;
           counter++;
        }
       
    })
    console.log(sum)
   
    let average = sum / counter
    console.log(average)
}

func([2,4,6,5])
   

//Zadanie 7

const func = (arr) =>{
   console.log(arr.sort((a,b)=> {
       return a-b
   }))
}

func([2,4,6,5, 22, 42]);


//Zadanie 8

let exampleArrayA = [7, 6, 3, 4];
let exampleArrayB = [5, 6, 2, 8];

function sumOfArraysIndex(arrayA, arrayB){
    let array = [];
    arrayA.forEach((num, i) =>{
        array.push(num + arrayB[i]);
    });
    return array;
}

console.log(sumOfArraysIndex(exampleArrayA, exampleArrayB));


//Zadanie 9
function getArrayWithOppositeSigns(numbers) {
    const result = [];
    for(let number of numbers) {
        result.push(-number);
    }
    return result;
}

console.log(getArrayWithOppositeSigns([1,-2,3]));
