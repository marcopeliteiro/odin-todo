import { Todo } from "./todo";

class Project{

static projectsList = [];

    constructor(name){
        this.name = name;
        this.todosList = [];
        Project.projectsList.push(this); //mal um projeto é criado, é guardado na projectsList
    }

    static displayProjects(){
        Project.projectsList.forEach(project => {
            console.log(project);
        });
    }

    addTodoToProject(todo){
        this.todosList.push(todo);
        }

    removeTodoFromProject(todo){
        this.todosList = this.todosList.filter(td => td.id != todo.id);
    }
}

function createProjectAndSaveToLocalStorage(nami){
    let project1 = new Project(nami);
    localStorage.setItem("projects", JSON.stringify(Project.projectsList));
};

function retrieveProjectsLocalStorage(){
    let projects = localStorage.getItem("projects");
    let projects_parsed = JSON.parse(projects);
    Project.projectsList = reAddMethodsToParsedProjects(projects_parsed);
    return Project.projectsList;
}

function reAddMethodsToParsedProjects(listOfParsedProjects){
    listOfParsedProjects.forEach(parsedProject =>{
        parsedProject.addTodoToProject = function(todo){
            this.todosList.push(todo);
        };
        parsedProject.removeTodoFromProject = function(todo){
            this.todosList = this.todosList.filter(td => td.id != todo.id);
        };
        reAddMethodsToTodos(parsedProject.todosList);
    })
    return listOfParsedProjects;
}

function reAddMethodsToTodos(todosArr){
    todosArr.forEach(todo=>{
        todo.editTodo = function(newName, newDate, newcheckTodo){
            this.name = newName;
            this.date = newDate;
            this.checkTodo = newcheckTodo;
        }
    })
}

export {Project, createProjectAndSaveToLocalStorage, retrieveProjectsLocalStorage};