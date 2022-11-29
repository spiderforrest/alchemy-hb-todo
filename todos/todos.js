import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // on submit, create a todo, reset the form, and display the todos
    const input = new FormData(todoForm);
    const todo = input.get('todo');
    await createTodo(todo);
    todoForm.reset();
    displayTodos();
});

// add async complete todo handler function
// call completeTodo
// swap out todo in array
// call displayTodos

async function displayTodos(todos) {
    todos = await getTodos();
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';
    // display the list of todos,
    for (const item of todos) {
        // call render function, pass in state and complete handler function!
        const target = renderTodo(item);
        // append to .todos
        todosEl.append(target);
    }
}

// add page load function
self.addEventListener('load', () => {
    // call displayTodos
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
