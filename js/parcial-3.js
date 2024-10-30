let temperatura = prompt('ingresa la temperatura de hoy')
if (temperatura >= 30) {
    console.log('la temperatura es caliente');
}else if (temperatura < 30 && temperatura >= 15) {
    console.log('el clima esta templado');
}else if (temperatura <= 14 && temperatura >= 0) {
    console.log('el clima esta frio');
}else if (temperatura < 0) {
    console.log('muy frio');
}