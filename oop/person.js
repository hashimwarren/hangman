// **constructor function** is a function that can be used to created objects. 
// Use the **new** operator to create a new object off od the constructor function. 
// The **this** keyword refers to the function itself. It implcitly returns an object. Leave **return** off

// Prototypical inheritance

const Person = function (firstName, lastName, age, likes) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes

}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })


    return bio

}

Person.prototype.setName = function (fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]

}

const me = new Person('Hashim', 'Warren', 40, ['teaching, biking'])
me.setName('Darique Warren')
console.log(me.getBio())

const person2 = new Person('Alexandra', 'Houston', 38)
console.log(person2.getBio()) // expected: "Alexandra is 38". Printed error: "Cannot read property 'forEach' of undefined"