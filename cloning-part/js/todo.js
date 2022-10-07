const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");


function handleAddNewTodo(newTodo) {
  const todoList_li = document.createElement("li");
  const todoList_span = document.createElement("span");
  todoList_li.appendChild(todoList_span);
  todoList_span.innerText = newTodo;
  todoList.appendChild(todoList_li);
}


function handleAddTodoList(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  console.log(newTodo);

  handleAddNewTodo(newTodo);
  
}





todoForm.addEventListener("submit", handleAddTodoList);