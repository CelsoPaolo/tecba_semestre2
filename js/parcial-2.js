let producto = prompt('ingresa el producto')
let precio = prompt('ingresa el precio')
if (precio >= 1000 ) {
    console.log(precio / 10);
}else if (precio < 1000 && precio < 500) {
    console.log(precio / 5);
}else if (precio < 500 ) {
    console.log('no tienes descuento');
}
