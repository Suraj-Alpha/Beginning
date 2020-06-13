// const mytodos = ['Buy Bread' , 'Go to Gym', 'recorc youtube']

// console.log(mytodos.indexOf('Go to Gym'))

const newTodos = [
{    title : 'Buy Bread',
    isDone : false
},

{   title : 'Go To Gym',
    isDone : false
},

{   title : 'Record For Youtube',
    isDone : false
}]

// const index = newTodos.findIndex(function(todo,index){    
//     console.log(todo)
//     return todo.title === 'Go to Gym'
// })

// console.log(index)


// const findTodo = function(myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printme = findTodo(newTodos,'Go To Gym')
// console.log(printme)

const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}



let printme = findTodo(newTodos,'Go To Gym')
console.log(printme)
