
let zapatillas=[
    {id: 1, modelo:"nike",precio:2500},
    {id: 2, modelo:"adidas",precio:2650},
    {id: 3, modelo:"puma",precio:2400},
    {id: 4, modelo:"newbalance",precio:2700},
    ]
    
    
    
    
    setTimeout(() => {
        document.getElementById("001").innerHTML="Elija su Zapatos"
    
    
        for(const calzado of zapatillas){
    
    let zapatilla = document.createElement("div");
    zapatilla.innerHTML=`
    <h3> ID: ${calzado.id}</h3> 
    <h3> Modelo: ${calzado.modelo}</h3> 
    <h3> Precio: ${calzado.precio}</h3>`
    document.body.appendChild(zapatilla);
    
        }
    
    
    }, 2*1000);