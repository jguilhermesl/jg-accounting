var hamburguer = document.querySelector("#hamburguer"); 


function sidebar() {
    document.querySelector("#hamburguer").classList.toggle("show-menu");
    document.querySelector(".sidebar").classList.toggle("show-menu-sidebar");
    

}

function aparecerForm() {
    document.querySelector("#titulo-principal").classList.toggle("titulo-principal-cima");
    document.querySelector("#formulario-home").classList.toggle("form-cima");
    document.querySelector("#botao-contato").classList.toggle("botao-cima");
}