/*
let IngreseUsuario = prompt("Ingrese Usuario")
let IngreseContraseña = prompt("Ingrese Contraseña"); 

  if (IngreseContraseña =="CabreraTomas"){
     alert("Contraseña Correcta!");
}
else {
        alert("Contraseña Incorrecta");
}

alert = alert("Bienvenido a Cabrera Cars");
confirmacion = confirm("¿Quieres recibir notificaciones?");
*/


//navegar por la lista de productos 
class Producto {
        constructor(nombre,categoria,precio,stock){
            this.nombre = nombre;
            this.modelo = modelo;
            this.precio = precio;
            }
    }
    
    const listaProductos =[
        {id:1, nombre: "hotwheels", modelo: "porsche series",precio: "10000", stock: "20"},
        {id:2, nombre: "hotwheels", modelo: "datsun 240z", precio: "10000", stock: "15"},
        {id:3, nombre:"hotwheels", modelo: "55 chevy bel air", precio:"11000", stock:"30"},
        {id:4, nombre:"matchbox", modelo: "2012 bmw 3 series", precio:"8000", stock:"45"},
        {id:5, nombre:"matchbox", moedelo:"2020 corvette", precio:"8000", stock:"15"},
        {id:6, nombre:"matchbox", modelo: "2021 ford bronco", precio:"8000", stock:"19"},
        {id:7, nombre:"matchbox", modelo:"2022 ford f-150 lightning", precio:"8000", stock:"15"},
        {id:8, nombre:"matchbox", modelo:"2019 ford mustang coupe", precio:"8000", stock:"25"},
        {id:9, nombre:"matchbox", modelo:"hazard squad", precio:"8000", stock:"7"},
        {id:10, nombre: "matchbox", modelo: "2020 honda e", precio:"8000", stock:"10"},
    ]

//busqueda por modelo 
    let busquedaUsuario = prompt("que modelo queres buscar?")
    const busqueda = listaProductos.find(producto => producto.nombre == busquedaUsuario);
    //(alert(busqueda)

//filtrar por precio 
   let filtraPorPrecio = prompt ("que precio?")
   const filtra = listaProductos.filter(producto => producto.precio > 7000);
   alert(filtra)
   
//crear producto nuevo
   let crearProducto = () => {
    let nombre = document.querySelector("#modelo").value;
    let modelo = document.querySelector("#modelo").value;
    let precio = parseInt(document.querySelector("#precio").value);

    let modeloNuevo = new Producto (nombre, modelo, precio);
    productosAgregados.push(modeloNuevo);
    return productosAgregados
   }
//ahora despedida por alert 
alert(`Hasta luego!!!`)
