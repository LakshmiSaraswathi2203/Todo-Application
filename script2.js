let todos = [];

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    todos.push(todoText);
    todoInput.value = "";
    displayTodos();
  }
}

function displayTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todoItem = document.createElement("li");
    const todoText = document.createElement("span");
    const deleteButton = document.createElement("button");

    todoText.textContent = todos[i];
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
      deleteTodo(i);
    };

    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  displayTodos();
}