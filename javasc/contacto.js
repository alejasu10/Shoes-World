let nombre = localStorage.getItem("nombre");
let dni = localStorage.getItem("dni");
let ciudad = localStorage.getItem("ciudad");
let tel = localStorage.getItem("tel");
let coment = localStorage.getItem("coment");
document.getElementById("nombre").value=nombre;
document.getElementById("dni").value=dni;
document.getElementById("ciudad").value=ciudad;
document.getElementById("tel").value=tel;
document.getElementById("coment").value=coment;



function registro(){

let nombre = document.getElementById("nombre").value;
let dni = document.getElementById("dni").value;
let ciudad = document.getElementById("ciudad").value;
let tel = document.getElementById("tel").value;
let coment =document.getElementById("coment").value;
localStorage.setItem("nombre",nombre);
localStorage.setItem("dni",dni);
localStorage.setItem("ciudad",ciudad);
localStorage.setItem("tel",tel);
localStorage.setItem("coment",coment)


};




botn.addEventListener("click",()=>{
 registro();
   
});


document.addEventListener("keyup",(e) =>{
    if (e.code === 'Enter') {
        registro();
    }
});