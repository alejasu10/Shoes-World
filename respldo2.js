
class cliente {

    constructor(nombre,edad,dni){
    
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
    }
    
    }
    
    
    class zapatilla{
    
        constructor(id,modelo,precio){
    
            this.id = id;
            this.modelo = modelo;
            this.precio = parseFloat(precio);
    
    
        }
    
    
    }
    
    
    function total(valor){
    
    sumar = valor*1.21;
    console.log("El total de su compra es: "+sumar);
    alert("El total de su compra es: "+sumar);
    
    
    }
    
    function descuento(valor){
    
        sumar = (valor*1.21)-200;
    console.log("El total de su compra es: "+sumar);
    alert("El total de su compra es: "+sumar);
    }
    
    const zapatillas = [];
    
    
    zapatillas.push(new zapatilla("1","nike","2500"));
    zapatillas.push(new zapatilla("2","adidas","2600"));
    zapatillas.push(new zapatilla("3","puma","2400"));
    zapatillas.push(new zapatilla("4","newbalance","2800"));
    
    
    alert("Bienvenido a Shoes World, En el log se muestran nuestros modelos. Para comprar eliga el Id del modelo");
    
    let nombrecliente = prompt("ingrese su nombre ");
    let edadcliente = prompt("ingrese edad ");
    let dnicliente = prompt("ingrese dni ");
       
     const cliente1 = new cliente(nombrecliente,edadcliente,dnicliente);
    console.log(cliente1);
    
    
    for( let i = 0; i<zapatillas.length;i++){
    
        console.log(zapatillas[i]);
    
    }
    
    console.log("codigo de descuento: 8864");
    
    let produ = parseInt(prompt("ingrese el ID de la zapatilla"));
    
    
    const resultado = zapatillas.find((intem)=>intem.id=produ);
    console.log("El precio del calzado es: "+resultado.precio);
    
    
    if((produ>0) && (produ<5)){
    
    let desc = prompt("Shoes Wolrd le da un Codigo de Desdcuento visible en el log, desea usalor? (S/N)");
    
    if(desc=="s"){
    
    let promo = parseInt(prompt("Introduzca su codigo de descuento :"));
    
    if (promo=="8864"){
    
        console.log(descuento(resultado.precio));
    
    
    }else{
    alert("Introdujo un  codigo erroneo");
        console.log("Introdujo un  codigo erroneo");
    
    }
    
    
    
    }else if(desc=="n"){
    
    console.log(total(resultado.precio));
    
    
    }else{
        alert("Introdujo un  codigo erroneo");
        console.log("Error al introducir los datos");
    }
    
    } else {
        alert("Introdujo un  codigo erroneo");
        console.log("Error al introducir los datos");
    
    }
    
    