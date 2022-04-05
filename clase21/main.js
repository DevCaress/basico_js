/* iterando sobre arrays */

var animales = [
    'perro', 
    'gato', 
    'perico',
    'puerquito',
    'vaca',
    'ballena'
];

animales[6] = 'caballo';
animales[7] = 'caballo';
animales[8] = 'caballo';
animales[9] = 'caballo';

for (let index = 0; index < animales.length; index++) {
    console.log(animales[index]);   
}

/* Crear un algoritmo:
    imprimir todos los elementos del array
    utilizando un bucle */