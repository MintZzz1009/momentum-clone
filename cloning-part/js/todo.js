const todoForm = document.querySelector("form#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("ul#todo-list");

let todoArray = [];
const TODOS_KEY = "todos";
const CLASS_HIDDEN = "hidden";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todoArray));
}

function editTodo(event) {
  const li = event.target.parentElement;
  const span = li.children[1];
  const btnEdit = li.children[2];
  const btnDelete = li.children[3];
  span.classList.add(CLASS_HIDDEN);
  btnEdit.classList.add(CLASS_HIDDEN);
  btnDelete.classList.add(CLASS_HIDDEN);
  
  const formToEdit = document.createElement("form");
  const input = document.createElement("input");
  const originText = span.innerHTML;
  input.value = originText;
  // input.innerText = originText;
  const btnSubmit = document.createElement("button");
  btnSubmit.innerText = "✅";
  formToEdit.addEventListener("submit", submitEditedTodo);
  
  formToEdit.appendChild(input);
  formToEdit.appendChild(btnSubmit);
  li.appendChild(formToEdit)

  function submitEditedTodo(event) {
    event.preventDefault();
    const editedTodo = input.value
    formToEdit.remove()
    span.innerText = editedTodo;
    span.classList.remove(CLASS_HIDDEN);
    btnEdit.classList.remove(CLASS_HIDDEN);
    btnDelete.classList.remove(CLASS_HIDDEN);
    
    const editedTodoObj = todoArray.find(newTodoObj => newTodoObj.id === parseInt(li.id));
    editedTodoObj.text = newText;
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
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const input = document.createElement("input");
  const span = document.createElement("span");
  const btnDelete = document.createElement("button");
  const btnEdit = document.createElement("button");

  input.type = "checkbox";
  span.innerText = newTodoObj.text;
  btnEdit.innerText = "✏️";
  btnEdit.addEventListener("click", editTodo);
 
  btnDelete.innerText = "❌";
  btnDelete.addEventListener("click", deleteTodo);

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(btnEdit);
  li.appendChild(btnDelete);
  todoList.appendChild(li);
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