const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

/*
function editodo(event) {
  event.target.c;
}
*/

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleAddNewItem(newTodo) {
  const todoList_li = document.createElement("li");
  const span = document.createElement("span");
  const btnDelete = document.createElement("button");
  const btnEdit = document.createElement("button");

  span.innerText = newTodo;
  btnEdit.innerText = "✏️";
  // btnEdit.addEventListener("click", editTodo);
 
  btnDelete.innerText = "❌";
  btnDelete.addEventListener("click", deleteTodo);

  todoList_li.appendChild(span);
  todoList_li.appendChild(btnEdit);
  todoList_li.appendChild(btnDelete);
  todoList.appendChild(todoList_li);
}

function handleAddNewTodoList(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  handleAddNewItem(newTodo);
}


todoForm.addEventListener("submit", handleAddNewTodoList);