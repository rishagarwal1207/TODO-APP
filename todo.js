const addButton= document.querySelector('.addButton');
const inputValue= document.querySelector('.input');
const container= document.querySelector('.input-contain');
const clearButton=document.querySelector('.refresh');
let todos;
if(window.localStorage.getItem("todos") == undefined){
    todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
 todos = JSON.parse(todosEX);

class item{
    constructor(itemName)
    {
        this.createDiv(itemName);
    }
    createDiv(itemName){
        
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled=true;
        input.classList.add('item_input');
        input.type="text";
        
        let itemBox= document.createElement('div');
        itemBox.classList.add('item');

        let checkButton= document.createElement('input');
        checkButton.classList.add('checkinput');
        checkButton.type="checkbox";

        let editButton= document.createElement('button');
        editButton.innerHTML='<i class="fa fa-pencil-square-o" aria-hidden="true"></i>';
        editButton.classList.add('editButton');

        let removeButton= document.createElement('button');
        removeButton.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>';
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.appendChild(checkButton);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);
        
        editButton.addEventListener('click',() => this.edit(input,name));
        removeButton.addEventListener('click',()=>this.remove(itemBox,name));
    }
    
    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
  
            let indexof = todos.indexOf(name);
            todos[indexof] = inputValue.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
    }
    remove(item,name){ 
        container.removeChild(item);
        let index= todos.indexOf(name);
        todos.splice(index,1);
        window.localStorage.setItem("todos",JSON.stringify(todos));
    }
}
function check(){
    if(inputValue.value != ""){
        new item(inputValue.value);
    todos.push(inputValue.value);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    input.value="";
    }
}
addButton.addEventListener('click',check);

for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}

function clear(){
    window.localStorage.clear();
}

clearButton.addEventListener('click',clear);