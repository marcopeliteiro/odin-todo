import "./styles.css";
import { Todo } from "./todo";
import { Project } from "./project";
import {displayProjectsDOM} from "./DOM";

console.log("ola");

let todo1 = new Todo("Compras");
let todo2 = new Todo("Lixo");
let todo3 = new Todo("Estudo");

let project1 = new Project("Project 1");
let project2 = new Project("Project 2");

project1.addTodoToProject(todo1);
project1.addTodoToProject(todo2);

project2.addTodoToProject(todo3);

Project.displayProjects();

todo1.editTodoName("Loiça");

Project.displayProjects();

displayProjectsDOM(Project.projectsList);




