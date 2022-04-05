/* condicionales: sentencia if o estructura if */

var mayorDeEdad = false;
var crush = false;

/* if (crush == true) {
    console.log('Quieres ser mi novia??');
}

if (crush == false) {
    console.log('Sigue participando');
} */

/* Crear un algoritmo con lo siguiente:
Examen con 100 preguntas
100 = 10
90 = 9
60= 6
< 60 = 5 */

var aciertos = 90;

if (aciertos == 100) {
    console.log('Aciertos: ' + aciertos);
    console.log('Tienes 10 de calificación');
}

if (aciertos < 100 && aciertos >= 90) {
    console.log('Aciertos: ' + aciertos);
    console.log('Tienes 9 de calificación');
}

if (aciertos == 60) {
    console.log('Aciertos: ' + aciertos);
    console.log('Tienes 6 de calificación');
}

if (aciertos < 60) {
    console.log('Aciertos: ' + aciertos);
    console.log('Estas reprobado, vete a derecho');
}