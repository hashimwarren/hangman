const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

}

const me = new Person('Hashim', 'Warren', 40)
me.firstName = 'Zakeya'
console.log(me)

const person2 = new Person('Alexandra', 'Houston', 38)
console.log(person2)