// select dom elements
var newTodoForm = document.getElementById('new-todo-form')
var newToDoInput = document.getElementById('new-todo')
var toDoList = document.getElementById('todos-list')

var todos = []

function addTodo(event) {
    event.preventDefault()
    var newTodoText = newToDoInput.value
    todos.push(newTodoText)
    newToDoInput.value = ''
}

newTodoForm.addEventListener('submit', addTodo)

