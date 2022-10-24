const editTodo = function(event) {
  const li = event.target.parentElement;
  const span = li.children[0];
  const btnEdit = li.children[1];
  const btnDelete = li.children[2];
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

  return [li, span, btnEdit, btnDelete];
}

function submitEditedTodo(event) {
  event.preventDefault();
  const editedTodo = input.value
  formToEdit.remove()
  const [li, span, btnEdit, btnDelete] = editTodo(click);
  li.innerText = editedTodo;
  span.classList.remove(CLASS_HIDDEN);
  btnEdit.classList.remove(CLASS_HIDDEN);
  btnDelete.classList.remove(CLASS_HIDDEN);
  
  const editedTodoObj = todoArray.find(newTodoObj => newTodoObj.id === parseInt(li.id));
  editedTodoObj.text = newText;
  saveTodos();
}
