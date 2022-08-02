let zapatillas= [
    {id: 201, nombre: "nike airforce 1", precio: 2500, imagen :"../imagenes/nike4.webp"},
    {id: 202, nombre: "nike airforce 2", precio: 2600, imagen :"../imagenes/nike5.webp"},
    {id: 203, nombre: "nike airforce 3", precio: 2700, imagen :"../imagenes/nike6.webp"},
    {id: 204, nombre: "nike airforce 4", precio: 2800, imagen :"../imagenes/nike7.webp"},
    {id: 205, nombre: "nike airforce 5", precio: 2900, imagen :"../imagenes/nike8.webp"},

];




let guardar = localStorage.getItem('zapatos_carrito');
let zapatos_carrito;

!guardar ? zapatos_carrito=[] : zapatos_carrito = JSON.parse(guardar);


function pluscarro(zapatos){
    
    zapatos_carrito.push(zapatos);
    console.log(zapatos_carrito);
    localStorage.setItem('zapatos_carrito',JSON.stringify(zapatos_carrito));
    carritozapato();
};


function listazapatos(){

    let agregar="";

for (let i = 0 ; i<zapatillas.length; i++){
    agregar= agregar + `

    <div onclick="pluscarro({id: ${zapatillas[i].id},nombre:'${zapatillas[i].nombre}',precio:${zapatillas[i].precio}, imagen: '${zapatillas[i].imagen}'})" id: ${zapatillas[i].id} class="card c_org2" style="width: 18rem;">
        <img src=${zapatillas[i].imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">"${zapatillas[i].nombre}".</p>
        </div>
      </div>
`;
}

document.getElementById("agregardiv").innerHTML= agregar;



}

listazapatos();


function eliminar(id){

zapatos_carrito.splice(id,1);
localStorage.setItem('zapatos_carrito',JSON.stringify(zapatos_carrito));
carritozapato();
}

function carritozapato(){


    let agregar="";

for (let i = 0 ; i<zapatos_carrito.length; i++){
   
    agregar= agregar + `

    <div onclick= "eliminar(${i})" id: ${zapatos_carrito[i].id} class="card c_org2" style="width: 18rem;">
        <img src=${zapatos_carrito[i].imagen} class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">"${zapatos_carrito[i].nombre}".</p>
        </div>
      </div>
`;
}
document.getElementById('carritodiv').innerHTML= agregar;



}










