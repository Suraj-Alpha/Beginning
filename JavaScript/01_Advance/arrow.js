// const sayHello = function(name){
//     return "Hay there , "+name+" !"
// }

// console.log(sayHello("John Doe"))

const sayHello = (name) => `Hay there ${name} !`


// console.log(sayHello("John Doe"))

const Todos = [
    {    title : 'Buy Bread',
        isDone : true
    },
    
    {   title : 'Go To Gym',
        isDone : false
    },
    
    {   title : 'Record For Youtube',
        isDone : false
    }]
   

const thingsDone = Todos.filter((todo) => todo.isDone === true)

// console.log(thingsDone)


const cameras = {
    price  : 600,
    weight : 2000,
    myDes : () =>  {return `This canon camera is of ${this.price}$`}
    
}

console.log (cameras.myDes())