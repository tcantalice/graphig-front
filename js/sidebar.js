// Coleção de alternadores
var togglersView = document.getElementsByClassName("toggler-view");

// Função do alternador
function toggleView(element){
    var classList = element.srcElement.classList;
    var parent = element.srcElement.parentElement;
    var chart = document.getElementById(parent.getAttribute("data-chart"));
    if(classList.contains("fa-eye")){
        classList.replace("fa-eye", "fa-eye-slash");
        chart.hidden = true;
    }else{
        classList.replace("fa-eye-slash", "fa-eye");
        chart.hidden = false;
    }
}

// Listeners
for(var i = 0; i < togglersView.length; i++){
    togglersView[i].addEventListener("click", element=>{
        toggleView(element);
    })
}