import { completeTodo } from './fetch-utils.js';
export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    const div = document.createElement('div');
    const p = document.createElement('p');

    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    div.classList.add(todo.complete ? 'complete' : 'incomplete');
    // add the 'todo' css class no matter what
    div.classList.add('todo');
    // put the todo's text into the p tag
    p.textContent = todo.todo;
    // append stuff
    div.append(p);
    // add event listener for click and call handleComplete function
    div.addEventListener('click', async () => {
        await completeTodo(todo.id);
    });

    // return the div
    return div;
}
