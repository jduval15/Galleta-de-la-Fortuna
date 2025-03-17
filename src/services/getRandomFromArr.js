
/* funcion para extraer un elemento aleatorio*/

const getRandomFromArr = Arr =>{
    const indexRandom =  Math.floor(Math.random() * Arr.length)
     return Arr[indexRandom]
 
 }
 
 export default getRandomFromArr