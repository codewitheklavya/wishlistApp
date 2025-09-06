let todoInput = document.querySelector(".input");
let addToButton = document.querySelector(".button");
let todo;

/**creating function for universal unique indentity */
function uuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param){
        let number = Math.random()*16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0X3 | 0x8);
        return randomNumber.toString(16);
    })
}

addToButton.addEventListener("click", (e)=>{
    e.preventDefault();
    todo = todoInput.value;
    console.log(todo);
})