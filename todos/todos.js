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
    // on submit, create a todo, reset the form, and display the todos
});

// create todo state
let todos = [];

// add async complete todo handler function
// call completeTodo
// swap out todo in array
// call displayTodos

async function displayTodos() {
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
window.addEventListener('load', async () => {
    // fetch the todos and store in state
    todos = await getTodos();
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
