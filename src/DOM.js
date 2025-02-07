import { Project } from "./project";

const projectsSection = document.querySelector("#projectsSection");
const editModal = document.querySelector("#editModal");
const editModalNameinput = document.querySelector("#todoNameEdit");
const editModalDateInput = document.querySelector("#todoDateEdit");
const confirmEditTodoBtn = document.querySelector("#confirmEditTodo");

let currentEditingTodo = null;

function displayProjectsDOM(){

    Project.projectsList.forEach(project => {
        const projectNameHeader = document.createElement("h1");
        projectNameHeader.textContent = project.name;
        projectsSection.appendChild(projectNameHeader);

        const todosTable = document.createElement("table");
        displayTodosinProjectDOM(project, todosTable, projectsSection);
        
        });
}

function displayTodosinProjectDOM(project, todosTable, projectsSection){

    project.todosList.forEach(todo =>{
        const todoRowDOM = document.createElement("tr");
        const todoIdDOM = document.createElement("td");
        const todoNameDom = document.createElement("td");
        const todoDateDOM = document.createElement("td");
        const deleteBtnDOM = document.createElement("button");
        const editBtnDOM = document.createElement("button");

        todoIdDOM.textContent = todo.id;
        todoNameDom.textContent = todo.name;
        todoDateDOM.textContent = todo.date;
        deleteBtnDOM.textContent = "Delete";
        editBtnDOM.textContent = "Edit";

        deleteTodoFromProjectDOM(deleteBtnDOM, project,todo);
        editTodoDOM(todo,editBtnDOM);

        todoRowDOM.appendChild(todoIdDOM);
        todoRowDOM.appendChild(todoNameDom);
        todoRowDOM.appendChild(todoDateDOM);
        todoRowDOM.appendChild(deleteBtnDOM);
        todoRowDOM.appendChild(editBtnDOM);

        todosTable.appendChild(todoRowDOM);

        projectsSection.appendChild(todosTable);
     });
}

function deleteTodoFromProjectDOM(deleteBtn, project, todo){
    deleteBtn.addEventListener("click",()=>{
        project.removeTodoFromProject(todo);
        cleanDOMandRedisplay(projectsSection, Project.projectsList);
    });
}

function editTodoDOM(todo,editBtn){
    editBtn.addEventListener("click",()=>{
        currentEditingTodo = todo;
        editModalNameinput.value = currentEditingTodo.name;
        editModalDateInput.value = currentEditingTodo.date;
        editModal.showModal();
        
    });
}

    confirmEditTodoBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const newName = editModalNameinput.value;
        const newDate = editModalDateInput.value;
        currentEditingTodo.editTodo(newName, newDate);
        editModal.close();
        cleanDOMandRedisplay(projectsSection,Project.projectsList);
        
    });


function cleanDOMandRedisplay(projectsSection){
    projectsSection.replaceChildren();
    displayProjectsDOM();
}

export {displayProjectsDOM};