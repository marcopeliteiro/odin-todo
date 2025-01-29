class Todo{
    
    static idCount = 0;

    constructor(name){
        this.id = ++Todo.idCount;
        this.name = name;
    }

    editTodoName(newName){
        this.name = newName;
    }

}

export {Todo};