/* sentencias */
/* switch-case */

var calificacion = 2;
switch (calificacion) {
    case 10:
        console.log('Tuviste calificación perfecta');
    break;
    case 5:
        console.log('Reprobaste'); 
        break;
    case 9:
        console.log('Casi, te falto un poco más');   
        break;
    case 6:
        console.log('Apenas y pasaste');
        break;
    default:
        console.log('Pon un valor correcto');
        break;
}

if(calificacion < 6){
    console.log('reprobaste');
}

/* Crear un algoritmo:
    dame un numero del 1-10
    si el numero es 7 ganaste
    si no perdiste
    si el numero es 3 ganas la mitad*/

var numero = 5;

switch (numero) {
    case 7:
        console.log('ganaste el premio mayor');
        break;
    case 3:
        console.log('Ganaste la mitad del premio');
        break;

    default:
        console.log('Perdiste');
        break;
}