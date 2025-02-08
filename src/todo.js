class Todo{
    
    static idCount = 0;

    constructor(name, date, checkTodo){
        this.id = ++Todo.idCount;
        this.name = name;
        this.date = date;
        this.checkTodo = checkTodo; //valor boolean
    }

    editTodo(newName, newDate, newcheckTodo){
        this.name = newName;
        this.date = newDate;
        this.checkTodo = newcheckTodo;
    }

}

export {Todo};