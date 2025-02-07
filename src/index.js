import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";
import {displayProjectsDOM} from "./DOM";
import { format} from "date-fns";

console.log("ola");

//yyyy/M/d
let date1 = format(new Date(2025,0,31), "yyyy-MM-dd");
let date2 = format(new Date(2025,1,16), "yyyy-MM-dd");
let date3 = format(new Date(2025,6,28), "yyyy-MM-dd");

console.log(date1);

let todo1 = new Todo("Compras", date1);
let todo2 = new Todo("Lixo",date2);
let todo3 = new Todo("Estudo",date3);

let project1 = new Project("Project 1");
let project2 = new Project("Project 2");

project1.addTodoToProject(todo1);
project1.addTodoToProject(todo2);

project2.addTodoToProject(todo3);

Project.displayProjects();

//todo1.editTodo("Loiça");

displayProjectsDOM(Project.projectsList);




