class Todo{
    
    static idCount = 0;

    constructor(name, date){
        this.id = ++Todo.idCount;
        this.name = name;
        this.date = date;
    }

    editTodo(newName, newDate){
        this.name = newName;
        this.date = newDate;
    }

}

export {Todo};