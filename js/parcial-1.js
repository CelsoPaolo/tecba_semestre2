let calificacion = prompt('ingresar tu calificacion')
if (calificacion < 60 ) {
    console.log(' tu calificacion es de F');
}else if (calificacion >= 60 && calificacion <= 69) {
    console.log('calificacion de D');
}else if (calificacion >=70 && calificacion <=79){
    console.log('calificacion de C');
}else if (calificacion >= 80 && calificacion <= 89) {
    console.log('califivcacion de B');
}else if (calificacion >= 90 && calificacion <= 100) {
    console.log('califivcacion de A');
}