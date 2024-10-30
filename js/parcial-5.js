let numero1 = parseInt(prompt('ingrese un numero'))
let numero2 = parseInt(prompt('ingrese un numero'))
let aplicacion = prompt('elija que quiere (suma, resta, multiplicacion, division)')
if (aplicacion === "suma"  ) {
    console.log(numero1 + numero2);
}else if (aplicacion === "resta") {
    console.log(numero1 - numero2);
}else if (aplicacion === "multiplicacion" ) {
    console.log(numero1 * numero2);
}else if (aplicacion === "division" ) {
    console.log(numero1 / numero2);
}