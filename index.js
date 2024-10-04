
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const {getRandomGreeting} = require("./utils/greetingGenerator");
const {response} = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const currentTasks = ["Buy Groceries"];



// Example #1
// app.get('/', (req, res) => {
//     const randomGreeting = getRandomGreeting();
//     console.log(randomGreeting);
//     res.render('greeting', { greeting: randomGreeting });
// });

// Example #2

app.get('/todos', (req, res) => {
    console.log("hit todos route renders form")
    res.render('todoList', { tasks: currentTasks });
})

app.post('/todos', (request, response) => {
    const newTodo = request.body.todo;
    if (newTodo) {
        currentTasks.push(newTodo);
    }
    console.log("post todos route ")
    response.redirect('/todosList');
});

app.get('/todosList', (req, res) => {
    res.render('todos', { tasks: currentTasks });
    console.log("hit todosList route")
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})










// Routes
// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })
//
//
// app.get('/products', (req, res) => {
//     res.send('List of products');
//
// });
//
// app.get('/users', (req, res) => {
//     const users = [
//         { name: 'Alice', email: 'alice@example.com' },
//         { name: 'Bob', email: 'bob@example.com' },
//         { name: 'Charlie', email: 'charlie@example.com' }
//     ];
//     res.render('userList', { users: users });
// });
//
// // Middle Ware
// app.use((req, res, next) => {
//     console.log('Request received:', req.method, req.url);
//     next();
// });


