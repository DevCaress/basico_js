/* condicionales */
/* sentencias anidadas */



/* if (forma == 'circulo' && color == 'naranja') {
    console.log('Estas describiendo una naranja');
}else if(forma == 'circulo' && color == 'cafe'){
    console.log('Un coco');
}else if(forma == 'ovalo' && color == 'amarillo'){
    console.log('En una piña');
} else if(forma == 'ovalo' && color == 'verde'){
    console.log('En una sandia');
}else{
    console.log('Me rindo, no se que es ');
} */

var forma = 'perro';
var color = 'verde';

if(forma == 'circulo'){

    if (color == 'naranja') {
        console.log('Puede que sea una naranja');
    }else if(color == 'cafe'){
        console.log('Puede que sea un coco');
    }else{
        console.log('No se que fruta sea');
    }   
    
}else if(forma == 'ovalo'){

    if (color == 'amarillo') {
        console.log('Puede que sea una piña');
    }else if(color == 'verde'){
        console.log('Puede que sea un sandia');
    }else{
        console.log('No se que fruta sea');
    }   
    
}else{
    console.log('No pusiste una forma correcta');
}
