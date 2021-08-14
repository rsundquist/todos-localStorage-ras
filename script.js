// select dom elements
var newTodoForm = document.getElementById('new-todo-form')
var newToDoInput = document.getElementById('new-todo')
var toDoList = document.getElementById('todos-list')

var todos = []

for (var i = 0; i < todos.length; i ++) {
    var li = document.createElement('li')
    li.innerText = todos[i]
    toDoList.appendChild(li)
}

function addTodo(event) {
    event.preventDefault()
    var newTodoText = newToDoInput.value
    todos.push(newTodoText)
    newToDoInput.value = ''
}

newTodoForm.addEventListener('submit', addTodo)

