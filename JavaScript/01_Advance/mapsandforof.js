var john ={
    name: "I am john",
    age : 24,
    isActive : true
}

var marry = {
    name : 'i am marry',
    age : 23,
    isActive : true

}

var sam = {
    name : 'i am sam',
    age : 29,
    isActive : true
}

let users = new Map()
users.set('john',john)

users.set('marry',marry)

users.set('sam',sam)

// console.log(users)

//console.log(users.get('sam'));
// console.log(users.keys())


// for (const value of users.values()) {

//     console.log(value.name)
// }

// for (const [key,value] of users.entries()) {

//     console.log(key + '=' + value)
// }

users.forEach((value , key) => {
    console.log(key + ' = ' + value.name)
})