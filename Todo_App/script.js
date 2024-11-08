document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  const todoInput = document.querySelector(".todo-input");
  const todoSubmit = document.querySelector(".todo-submit");

  let editMode = false;
  let editItem = null;

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let inputText = todoInput.value.trim();

    if (inputText !== "") {
      if (editMode) {
        editItem.firstChild.textContent = inputText;
        todoSubmit.innerText = "Add todo";
        editMode = false;
        editItem = null;
      } else {
        addTodoItem(inputText);
      }
      todoInput.value = "";
    } else {
      alert("Please enter a valid task");
    }
  });

  todoList.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
      const todoItem = target.parentNode;
    
    if (target.innerText === "Delete") {
      todoItem.remove();
    } else if (target.innerText === "Edit") {
      editMode = true;
      editItem = todoItem;

      todoInput.value = todoItem.firstChild.textContent;
      todoSubmit.innerText = "Edit todo";
      todoInput.focus();
    }
    }
  });

  function addTodoItem(inputText) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = `<span>${inputText}</span>`;
    editButton.innerText = "Edit";
    removeButton.innerText = "Delete";

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);
    todoList.appendChild(todoItem);
  }
});
