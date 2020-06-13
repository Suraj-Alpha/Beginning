const myTodos = []
myTodos.unshift('Buy Bread');
myTodos.unshift('task2');
myTodos.unshift('cricket');

for(let tasks=0; tasks<myTodos.length;tasks++)
        {
            console.log (`Yours tsk No. ${tasks+1} is: ${myTodos[tasks]}`)
        }