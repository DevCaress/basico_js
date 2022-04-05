/* arrays multidimensionales */

/* var animales = [
    5,
    'caress',
    true,
    null,
    ['a','b','c']
];



for (let index = 0; index < animales.length; index++) {
    
    console.log(animales[index]);
} */


/* Crear un algoritmo:
que pinte todos los elementos del array animales */

var animales = [
    ['perro', 'gato', 'caballo', 'vaca'],
    ['pajaro', 'aguila', 'pez volador'],
    ['camaron', 'calamardo', 'patricio estrella', 'bob esponja', 'don cangrejo']
];


for (let index2 = 0; index2 < animales.length; index2++) {
    
    for (let index = 0; index < animales[index2].length; index++) {

        console.log('array' + index2 + ': '+ animales[index2][index]);
        
    }
    
}