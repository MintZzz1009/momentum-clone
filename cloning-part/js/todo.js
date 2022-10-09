const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

const todoArray = [];
const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function editTodo(event) {
  const li = event.target.parentElement;
  const span = li.children[0];
  // const span = event.target.parentElement.querySelector("span");
  const btnEdit = li.children[1];
  const btnDelete = li.children[2];
  span.classList.add("hidden");
  btnEdit.classList.add("hidden");
  btnDelete.classList.add("hidden");
  

  const formToEdit = document.createElement("form");
  const input = document.createElement("input");
  const originText = span.innerHTML;
  input.value = originText;
  // input.innerText = originText;
  const btnSubmit = document.createElement("button");
  btnSubmit.innerText = "✅";
  formToEdit.addEventListener("submit", submitNewTodo);
  
  formToEdit.appendChild(input);
  formToEdit.appendChild(btnSubmit);
  li.appendChild(formToEdit)

  function submitNewTodo() {
    event.preventDefault();
    const newText = input.value
    formToEdit.remove()
    span.innerText = newText;
    span.classList.remove("hidden");
    btnEdit.classList.remove("hidden");
    btnDelete.classList.remove("hidden");
  }
}

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
  btnEdit.addEventListener("click", editTodo);
 
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
  todoArray.push(newTodo);
  saveTodos();

  handleAddNewItem(newTodo);
}


todoForm.addEventListener("submit", handleAddNewTodoList);

const savedTodos = lacalstorage.getItem(TODOS_KEY);