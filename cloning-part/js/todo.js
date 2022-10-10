const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

let todoArray = [];
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

  function submitNewTodo(event) {
    event.preventDefault();
    const newText = input.value
    formToEdit.remove()
    span.innerText = newText;
    span.classList.remove("hidden");
    btnEdit.classList.remove("hidden");
    btnDelete.classList.remove("hidden");
    
    const newTextObj = todoArray.find(newTodoObj => newTodoObj.id === parseInt(li.id));
    newTextObj.text = newText;
    saveTodos();
  }
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todoArray = todoArray.filter((todo) => todo.id !== parseInt(li.id))
  saveTodos();  
}

function handlePaintTodo(newTodoObj) {
  const todoList_li = document.createElement("li");
  todoList_li.id = newTodoObj.id;
  const span = document.createElement("span");
  const btnDelete = document.createElement("button");
  const btnEdit = document.createElement("button");

  span.innerText = newTodoObj.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  todoArray.push(newTodoObj);
  saveTodos();

  handlePaintTodo(newTodoObj);
}


todoForm.addEventListener("submit", handleAddNewTodoList);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {       // if (savedTodos !== null)
  const parsedTodos = JSON.parse(savedTodos);
  todoArray = parsedTodos;
  parsedTodos.forEach(handlePaintTodo);
}