class producto {
    constructor (id, marca, tipo, precio){
        this.id = id
        this.marca = marca
        this.tipo = tipo
        this. precio = precio
    }
    verData(){
        console.log(`el suplemento es ${this.tipo}, de la marca ${this.marca} y su precio es ${this.precio}.`)
    }
}

const producto1 = new producto(1,"StarNutrition","Creatina", 900)

const producto2 = new producto(2,"MyProtein","Creatina", 1200)

const producto3 = new producto(3,"StarNutrition", "Proteina", 3000)

const producto4 = new producto(4,"MyProtein","Proteina", 3500)

const producto5 = new producto(5,"StarNutrition", "Quemador", 2200)

const producto6 = new producto(6,"MyProtein", "Quemador", 2900)

const tienda =[]
    tienda.push(producto1, producto2, producto3, producto4, producto5, producto6);

function verProductos (){
    console.log("Este es nuestro catálogo")
    tienda.forEach((producto) => {
        producto.verData()
    })
}

function buscarProducto(){
    let buscarProducto = prompt("Ingrese el Producto que desea encontrar")
    let busqueda = tienda.filter((producto)=> producto.tipo.toLowerCase() == buscarProducto.toLowerCase())
    if(busqueda.length == 0){
        alert("No se encontro ningún suplemento")
    }else{
        console.log("Los suplementos encontrados son:")
        console.log(busqueda)
        for(let productosEncotrados of busqueda){
            productosEncotrados.verData()
        }
    }
}


function buscarMarca(){
    let buscarProducto = prompt("Ingrese el Producto que desea encontrar")
    let busqueda = tienda.filter((producto)=> producto.marca.toLowerCase() == buscarProducto.toLowerCase())
    if(busqueda.length == 0){
        alert("No se encontro ningún suplemento")
    }else{
        console.log("Los suplementos encontrados son:")
        console.log(busqueda)
        for(let productosEncotrados of busqueda){
            productosEncotrados.verData()
        }
    }
}


function preguntarOpcion(){
        let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                            1 - Ver catálogo de suplementos.
                            2 - Buscar por producto. 
                            3 - Buscar por marca.
                            0 - Para salir
                            `))
        menu(opcion)
    }


function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos`)
        break    
        case 1:
            verProductos(tienda)
        break 
        case 2: 
            buscarProducto()
        break 
        case 3: 
            buscarMarca()
        break
        default: 
        alert(`Ingrese una opción correcta`)
    }
}

let salir 
while(salir != true){
    preguntarOpcion()
}