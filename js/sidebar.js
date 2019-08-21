var checkboxes = document.getElementsByClassName("checkbox");

for(var i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("click", element=>{
        toggleCheck(element);
    })
}

function toggleCheck(element){
    var classList = element.srcElement.classList;
    if(classList.contains("fa-square")){
        classList.replace("fa-square", "fa-check-square");
    }else{
        classList.replace("fa-check-square", "fa-square");
    }
}