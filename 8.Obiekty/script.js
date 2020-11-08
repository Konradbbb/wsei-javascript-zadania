//Zadanie 1
let car = {
    name: 'BMW',
    model:'F30',
    year:2014,
    
}

console.log(car);

//Zadanie 2
let car = {
    name: 'BMW',
    model:'F30',
    year:2014,
    nameChange: function(e){
        this.name=e;
    }
}
car.nameChange("Audi");
console.log(car.name);

//Zadanie 3
let object = {
    
    sum:0,
    sumFunc: function(tab) {
       let result =0;
       for(let i =0; i<tab.length;i++) {
            result +=tab[i]
       }
       this.sum = result;
    }
       
}

object.sumFunc([1,2,3,4,5]);
console.log(object.sum)

//Zadanie 4
let car = {
    name: "BMW",
    age: 12
}
for(i in car){
    console.log(`${i} : ${car[i]}`)
}

//Zadanie 5
let car = {
    name: "BMW",
    age: 12,
    object: {
        name: "Nazwa",
        age: 11
    }
}
for(i in car){
    console.log(`${i} : ${car[i]}`);
}
for(i in car.object) {
    console.log(`${i} : ${car.object[i]}`);
}


//Zadanie 6
let car = {
    name: "BMW",
    age: 12,
    object: {
        name: "Nazwa",
        age: 11
    }
}

car.price = 200;
car.sayHello = () => console.log("Hello");
car.sayHello();
console.log(car.price);
