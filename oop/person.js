class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes

    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio

    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]

    }

}

class Employee extends Person {

}

const person = new Employee('Alexandra', 'Houston', 38, ['Teaching'])
const person2 = new Person('Clancy', 'Martin', 55)



console.log(person.getBio()) //?
console.log(person2.getBio()); //?