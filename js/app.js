let nombre = prompt("ingresa tu nombre");
let edad = prompt("ingresa tu edad");
let membresia = prompt("ingresa el nivel de tu menbresia (basico, premium, vip)");


if (edad >= 18 && membresia === "basico" ) {
    console.log("acceso solo al area de descanso");
}else if (edad >= 18 && membresia === "premium") {
    console.log("Acceso a la pisina y al gimnasio");
}else if (edad >= 18 && membresia === "vip") {
    console.log("Acceso total a todas lass areas del club");
}else if (edad < 18) {
    console.log("acceso restringido por edad");
    
}
