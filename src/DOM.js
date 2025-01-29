const projectsSection = document.querySelector("#projectsSection");
const editModal = document.querySelector("#editModal");
const editModalNameinput = document.querySelector("#todoNameEdit");
const confirmEditTodoBtn = document.querySelector("#confirmEditTodo");

function displayProjectsDOM(projectsList){

    projectsList.forEach(project => {
        const projectNameHeader = document.createElement("h1");
        projectNameHeader.textContent = project.name;
        projectsSection.appendChild(projectNameHeader);

        const todosTable = document.createElement("table");
        displayTodosinProjectDOM(project, todosTable, projectsSection, projectsList);
        
        });
}

function displayTodosinProjectDOM(project, todosTable, projectsSection, projectsList){

    project.todosList.forEach(todo =>{
        const todoRowDOM = document.createElement("tr");
        const todoIdDOM = document.createElement("td");
        const todoNameDom = document.createElement("td");
        const deleteBtnDOM = document.createElement("button");
        const editBtnDOM = document.createElement("button");

        todoIdDOM.textContent = todo.id;
        todoNameDom.textContent = todo.name;
        deleteBtnDOM.textContent = "Delete";
        editBtnDOM.textContent = "Edit";

        deleteTodoFromProjectDOM(deleteBtnDOM, project,todo, projectsList);
        editTodoDOM(todo,editBtnDOM,projectsList);

        todoRowDOM.appendChild(todoIdDOM);
        todoRowDOM.appendChild(todoNameDom);
        todoRowDOM.appendChild(deleteBtnDOM);
        todoRowDOM.appendChild(editBtnDOM);

        todosTable.appendChild(todoRowDOM);

        projectsSection.appendChild(todosTable);
     });
}

function deleteTodoFromProjectDOM(deleteBtn, project, todo, projectsList){
    deleteBtn.addEventListener("click",()=>{
        project.removeTodoFromProject(todo);
        cleanDOMandRedisplay(projectsSection,projectsList);
    });
}

function editTodoDOM(todo,editBtn,projectsList){
    editBtn.addEventListener("click",()=>{
        editModalNameinput.value = todo.name;
        editModal.showModal();
        confirmEditTodo(confirmEditTodoBtn, editModalNameinput, todo, projectsSection, projectsList);
    });
}

function confirmEditTodo(confirmEditTodoBtn, editModalNameinput, todo, projectsSection, projectsList){
    confirmEditTodoBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        const name = editModalNameinput.value;
        todo.editTodoName(name);
        cleanDOMandRedisplay(projectsSection,projectsList);
        editModal.close();
    });
}

function cleanDOMandRedisplay(projectsSection,projectsList){
    projectsSection.replaceChildren();
    displayProjectsDOM(projectsList);
}

export {displayProjectsDOM};