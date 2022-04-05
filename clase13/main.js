/* condicionales */
/* sentencia else if */


/*Crear un algoritmo con lo siguiente:
    Evaluar la edad del cliente
    Si eres menor de edad te dara un mensaje diferente
    a cuando no tienes dinero
    Si es mayor y tiene más de 50 lo dejas entrar
    Si tiene menos de 50 no lo dejas pasar aunque
    tenga más de 18 años  */

var edad = 17;
var dinero = 100;

if (edad >= 18 && dinero >= 50) {
    console.log('Bienvenido!!');
}else if (edad >= 18 && dinero < 50){
    console.log('Vete de aqui pobreton');
}else{
    console.log('Vete a tu casa niño');
}

/* Crear un algoritmo:
    Si el cliente pide una cerveza le cobramos 50
    si e cliente pide un tequila le cobramos 80
    si el cliente pide unas papas le cobramos 60 
    si el cliente pide agua no le cobramos nada*/

var producto = false;

if (producto == 'cerveza' || producto == 'Cerveza') {
    console.log('Son 50 pesotes mi estimado');
}else if (producto == 'tequila' || producto == 'Tequila') {
    console.log('Son 80 pesos');
}else if(producto == 'papas' || producto == 'Papas'){
    console.log('Son 60 baros');
}else if(producto == 'agua' || producto == 'Agua'){
    console.log('Es gratis');
}else{
    console.log('Escribe bien no seas wey');
}