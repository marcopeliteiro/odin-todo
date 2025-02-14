import "./styles.css";
import { Todo } from "./todo";
import { Project, createProjectAndSaveToLocalStorage, retrieveProjectsLocalStorage } from "./project";
import {displayProjectsDOM} from "./DOM";
import { format} from "date-fns";

//Para outra altura, falta fazer: eliminar projetos, fazer uma interface melhor 

//createProjectAndSaveToLocalStorage("Projeto OG"); //tenho que depois ver quando não tem nenhum projeto inicial definido, dá erro


function initialSetup(){
    Project.projectsList = retrieveProjectsLocalStorage();
    //tenho de fazer isto, porque se o Project.projectsList estivesse a null, não dava para usar métodos de array
    if(Project.projectsList == null){
        Project.projectsList = [];
    }
    else{
        displayProjectsDOM();
    }
}

initialSetup();





