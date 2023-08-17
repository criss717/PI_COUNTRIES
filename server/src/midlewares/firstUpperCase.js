module.exports = (string)=>{ // logica para convertir cada primer letra de la frase en mayúscula
  let result=[]; 
  for(let x=0; x<string.length; x++) {
    if(x===0)  result.push(string[x].toUpperCase())
    else if(string[x-1]===' ')  result.push(string[x].toUpperCase())
    else result.push(string[x])
  }  
  return result.join("")
 
}