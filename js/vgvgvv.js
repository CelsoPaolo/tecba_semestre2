//let numero = prompt("ingrese un numero")
//if (numero % 2 === 0) {
//    console.log("el numero es par")
//}else {
//    console.log("el numero no es par");
//}





//let numero = prompt("ingresa un numero")
//if (numero >= 10 && numero <= 15) {
//    console.log('el numero esta dentro del rango');
//}else {
//    console.log('el numero no esta dentro del rango');
//}




//let numero =prompt('ingrese un numero')
//if (numero % 3 === 0) {
//    console.log('el numero es multiplo de 3');
//}else {
//    console.log('el numero no es multiplo de 3');
//}
//if (numero % 5 === 0) {
//    console.log('el numero  es multiplo de 5');
//}else {
//    console.log('el numero no es multiplo de 5');  
//}






//let nombre = prompt('ingresa tu nombre')
//let edad = prompt('ingresa tu edad')
//let genero = prompt('ingresa tu genero (masculino , femenino)')
//if (genero === "femenino" && edad >= 18 ) {
//    console.log('bienvenida a la zona vip');
//}else if (genero === "femenino" && edad < 18) {
//    console.log('no puedes acceder');
//}


//if (genero === "masculino" && edad >=18 && edad < 35) {
//    console.log('pasas a la zona x');
//}else if (genero === "masculino" && edad >= 35) {
//    console.log('pasas a la zona vip');
//}else if (genero === "masculino" && edad < 18) {
//    console.log('no puedes acceder por ser menor de edad');  
//}





let nombre = prompt('ingresa tu nombree')
let membresia = prompt('ingresa tu membresia (basico, premium y vip)')
let edad = prompt('ingresa tu edad')

if (edad >= 18 && membresia === "basico") {
    console.log('tienes acceso a la area de descanso');
}else if (edad >= 18 && membresia === "premium") {
    console.log("tienes acceso a la picina y gimnacio");
}else if (edad >= 18 && membresia === "vip") {
    console.log('acceso total a todas las areas');
}else if (edad < 18) {
    console.log('acceso restringido por edad');
}
