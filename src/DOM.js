import { Project } from "./project";
import { Todo } from "./todo";
const createProjectButton = document.querySelector("#createProject");
const createProjectModal = document.querySelector("#createProjectModal");
const confirmCreateProject = document.querySelector("#confirmCreateProject");
const projectNameCreate = document.querySelector("#projectNameCreate");
const createTodoModal = document.querySelector("#createTodoModal");
const todoNameCreate = document.querySelector("#todoNameCreate");
const todoDateCreate = document.querySelector("#todoDateCreate");
const confirmCreateTodo = document.querySelector("#confirmCreateTodo");
const projectsSection = document.querySelector("#projectsSection");
const editModal = document.querySelector("#editModal");
const editModalNameinput = document.querySelector("#todoNameEdit");
const editModalDateInput = document.querySelector("#todoDateEdit");
const todoCheckEdit = document.querySelector("#todoCheckEdit");
const confirmEditTodoBtn = document.querySelector("#confirmEditTodo");

//serve para guardar referencia ao todo que vai ser editado após clicar no editBtn e depois confirma se a edição no confirmBtn
let currentProject = null;
let currentEditingTodo = null; 

function displayProjectsDOM(){

    Project.projectsList.forEach(project => {
        const projectNameHeader = document.createElement("h1");
        const addTodoBtnDOM = document.createElement("button");
        projectNameHeader.textContent = project.name;
        addTodoBtnDOM.textContent = "Create todo";
        projectsSection.appendChild(projectNameHeader);
        projectsSection.appendChild(addTodoBtnDOM);

        openCreateTodosModal(addTodoBtnDOM, project);

        const todosTable = document.createElement("table");
        displayTodosinProjectDOM(project, todosTable, projectsSection);
        
        });
}

function openCreateTodosModal(addTodoBtnDOM, project){
    addTodoBtnDOM.addEventListener("click", ()=>{
        currentProject = project;
        createTodoModal.showModal();
    });
};

function displayTodosinProjectDOM(project, todosTable, projectsSection){

    project.todosList.forEach(todo =>{
        const todoRowDOM = document.createElement("tr");
        const todoNameDom = document.createElement("td");
        const todoDateDOM = document.createElement("td");
        const checkedTodoDOM = document.createElement("input");
        const deleteBtnDOM = document.createElement("button");
        const editBtnDOM = document.createElement("button");

        todoNameDom.textContent = todo.name;
        todoDateDOM.textContent = todo.date;
        checkedTodoDOM.type = "checkbox";
        checkedTodoDOM.checked = todo.checkTodo;
        deleteBtnDOM.textContent = "Delete";
        editBtnDOM.textContent = "Edit";

        deleteTodoFromProjectDOM(deleteBtnDOM, project,todo);
        changeCheckValue(todo,checkedTodoDOM);
        editTodoDOM(todo,editBtnDOM);

        todoRowDOM.appendChild(todoNameDom);
        todoRowDOM.appendChild(todoDateDOM);
        todoRowDOM.appendChild(checkedTodoDOM);
        todoRowDOM.appendChild(deleteBtnDOM);
        todoRowDOM.appendChild(editBtnDOM);

        todosTable.appendChild(todoRowDOM);

        projectsSection.appendChild(todosTable);
     });
}

function deleteTodoFromProjectDOM(deleteBtn, project, todo){
    deleteBtn.addEventListener("click",()=>{
        project.removeTodoFromProject(todo);
        cleanDOMandRedisplay(projectsSection);
    });
}

function editTodoDOM(todo,editBtn){
    editBtn.addEventListener("click",()=>{
        currentEditingTodo = todo;
        editModalNameinput.value = currentEditingTodo.name;
        editModalDateInput.value = currentEditingTodo.date;
        todoCheckEdit.checked = currentEditingTodo.checkTodo;
        editModal.showModal();
        
    });
}

function cleanDOMandRedisplay(projectsSection){
    projectsSection.replaceChildren();
    displayProjectsDOM();
}

createProjectButton.addEventListener("click", ()=>{
    createProjectModal.showModal();
});

//preciso desta função para depois aparecer o valor da checkbox no modal de editar
function changeCheckValue(todo, checkedTodoDOM){ 
    checkedTodoDOM.addEventListener("change",()=>{
        currentEditingTodo = todo;
        if(currentEditingTodo.checkTodo){
            currentEditingTodo.checkTodo = false;
        }
        else{
            currentEditingTodo.checkTodo = true;
        }
    });
}

//confirm Buttons

confirmEditTodoBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const newName = editModalNameinput.value;
    const newDate = editModalDateInput.value;
    const newTodoCheck = todoCheckEdit.checked;
    currentEditingTodo.editTodo(newName, newDate, newTodoCheck);
    editModal.close();
    cleanDOMandRedisplay(projectsSection);
});

confirmCreateProject.addEventListener("click", (e)=>{
    e.preventDefault();
    const newProjectName = projectNameCreate.value;
    let newProject = new Project(newProjectName);
    createProjectModal.close();
    cleanDOMandRedisplay(projectsSection);
});

confirmCreateTodo.addEventListener("click", (e)=>{
    e.preventDefault();
    const newTodoName = todoNameCreate.value;
    const newDate = todoDateCreate.value;
    let newTodo = new Todo(newTodoName,newDate);
    currentProject.addTodoToProject(newTodo);
    createTodoModal.close();
    //para limpar os inputs do modal
    todoNameCreate.value="";
    todoDateCreate.value="";
    cleanDOMandRedisplay(projectsSection);
});


export {displayProjectsDOM};