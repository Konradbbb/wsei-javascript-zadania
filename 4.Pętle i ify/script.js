//Zadanie 1:
let p1 = 2;
let p2 = 6;
if(p1>p2) {
  console.log(p1);  
} else if(p1==p2) {
  console.log("Sa rowne");  
} else {
  console.log(p2);  
} 

//Zadanie 2:
let firstNumber = 111;
let secondNumber = 222;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber);

} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber);
    
} else {
    console.log(thirdNumber);
}


//Zadanie 3:
for (var step = 0; step < 10; step++) {
  console.log('Lubię JavaScript');
}

//Zadanie 4:
let result = 0;
for(let i = 1; i<=10; i++){
    result += i;
}
console.log(result);


//Zadanie 5:







//Zadanie 6:
for ( let i = 0; i < 5; i++) {

	for ( let j = 0; j < 5; j++) {

		console.log("i= " + i + ", j= " + j);

		}
	}

//Zadanie 7:

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

for (let variable = 0; varaiable < 100; varaiable++) {
  if (variable % 3 == 0) {
   console.log("Fizz")
   }
  else if (variable % 5 == 0) {
   console.log("Buzz")
   }
  else if (variable % 3 == 0 && variable % 5 == 0) {
   console.log("FizzBuzz")
   }
  else {
  console.log(variable)
  }
  
  
 // Zadanie 8:
	
// a)
let stars = '*';
let spacer = ' ';
for (var a = 0; a < 5; a++) {
    var result = '';
    for (var b = 0; b <= a; b++) {
        result += stars;
    }
    console.log(result);
}

// b)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    console.log(result);
}

// c)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 5; c++) {
    var result = '';
    for (var d = 5 - 1; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars;
        result += (e < c) ? stars : '';
    }
    console.log(result);
}

// d)
let stars = '*';
let spacer = ' ';
for (var f = 0; f < 11; f++) {
    var result = '';
    for (var g = 0; g < 5; g++) {
        if (f < 5) {
            result += g <= f ? stars : g;
        } else if (f > 5) {
            result = (g < f-6 ? (g-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}

// e)
let stars = '*';
let spacer = ' ';
for (var c = 0; c < 8; c++) {
    var result = '';
    for (var d = 4; d > c; d--) {
        result += spacer;
    }
    for (var e = 0; e <= c; e++) {
        result += stars + spacer;
    }
    if(c>=5) {
        result = '';
        for (var f = 0; f < 4; f++) {
          result += spacer;
        }
        result += stars;
    }
  
    console.log(result);
}

