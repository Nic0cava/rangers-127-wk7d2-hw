//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


for (const value of Object.values(person3)){
    if (Array.isArray(value)) {
        for (const dish of value){
            console.log(dish)
        }
    } else {
        console.log(value)
    }
}




//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function person(name, age){
    this.name = name;
    this.age = age

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.addAge = (years) => {
        this.age += years
    }
}

let person1 = new person('Nico', 22)
console.log(person1)
console.log(person1.addAge(5))
console.log(person1)

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringLength = (string) => {
    return new Promise((resolve, reject)=>{
        if (string.length > 10){
            resolve(string)
        } else {
            reject(string)
        }
    })
}

stringLength('Supercalifragilisticexpialidocious')
    //happy path resolve
    .then((result) =>{
        console.log(`Big Word: ${result}`)
    })
    .catch((error)=> {
        console.log(`Small Number: ${error}`)
    })



//=========== Code Wars Problems ===============

//Problem 1
function circleArea(radius) {
    if (radius < 1){
      throw new Error()
    }
    let result = Math.PI * radius * radius;
    return result 
  }

//Problem 2
function countSheeps(sheep) {
    let count = 0
    for (let i = 0; i < sheep.length; i++){
      if (sheep[i])
        count +=1
    }
    return count
  }