let nombre = prompt("ingresa tu nombre");
let edad = prompt("ingresa tu edad");
let genero = prompt("ingresa tu genero (masculino, femenino)");

if (edad >= 18 && genero === "femenino") {
    console.log("bienvenida a la zona vip");
}else if (edad < 18 && genero === "femenino") {
    console.log("acceso restringido por edad");
    
}
if (edad >= 18 & edad <= 34 && genero === "masculino") {
    console.log("entras a la zona x");
}else if (edad >= 35 && genero === "masculino") {
    console.log("entras a la zona vip");
}else if (edad < 18 && genero === "masculino") {
    console.log("Acceso restringido por edad");
}
