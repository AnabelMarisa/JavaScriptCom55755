const SI = 'si';
const NO = 'no';
let nombreUsuario;
let nombreTour;
let precio;
let total = 0;
let cantidad;
let continuar;
let ticket = 'nombre   precio   cantidad    subtotal \n';

function cargaProducto() {
    nombreTour = prompt('Ingrese nombre del Tour:');
    precio = +prompt('Ingrese precio en euros:');
    precio = validacionPrecio(precio);
    cantidad = +prompt('Ingrese cantidad: ');
}

function generarDetalle(nombreTour, precio, cantidad) {
    let detalle = `${nombreTour}     ${precio} €     ${cantidad}     ${precio * cantidad} €\n`;
    ticket = ticket + detalle;
}

function validacionPrecio(price) {
    while (price < 0 || isNaN(price)) {
        price = +prompt('Precio incorrecto o no es un número válido, vuelva a ingresarlo en euros: ');
    }
    return price;
}

nombreUsuario = prompt('Bienvenido a Nuestra Agencia con los Mejores Tours!! \n Ingrese su nombre: ');
do {
    cargaProducto();
    continuar = prompt('Desea ingresar otro Tour? si/no');
    while (continuar !== SI && continuar !== NO) {
        continuar = prompt('Respuesta invalida, por favor vuelva a ingresar si desea continuar o no:');
    }
    generarDetalle(nombreTour, precio, cantidad);
    total = total + precio * cantidad;
} while (continuar === SI);

ticket = ticket + `Total en euros: ${total}`;
alert(ticket);
