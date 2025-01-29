

class Project{

static projectsList = [];

    constructor(name){
        this.name = name;
        this.todosList = [];
        Project.projectsList.push(this);
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

export {Project};