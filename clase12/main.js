/* condicionales */
/* sentencia if else */

var casado = false;

if (casado) {
    console.log('Estas casado');
} else{
    console.log('Abre tinder xd');
}

/* if (casado == false) {
    console.log('Abre tinder xd');
} */

var calificacion = 5;

if (calificacion > 5) {
    console.log('Aprobaste el examen');
}else{
    console.log('Reprobaste el examen');
}


/*Crear un algoritmo con lo siguiente:
    Evaluar la edad del cliente
    Si es mayor y tiene más de 50 lo dejas entrar
    Si tiene menos de 50 no lo dejas pasar aunque
    tenga más de 18 años  */

var edad = 17;
var dinero = 50;

if (edad >= 18 && dinero >= 50) {
    console.log('Bienvenido!!');
}else{
    console.log('Vete para tu casa');
}