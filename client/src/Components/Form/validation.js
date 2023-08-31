export default function validation({name,difficulty,duration,season,countries}){
    const regexName=/^[^\d]+$/;
    const errors={}

    if(!name) errors.name='Campo requerido'
    else {
        if(!regexName.test(name)) errors.name='Este campo no puede tener numeros'
        else if(name.length<3) errors.name='El nombre debe tener al menos 3 caracteres'
    }
    
    if(!difficulty) errors.difficulty='Campo requerido'

    if(!duration) errors.duration='Campo requerido'
    else if(duration>72) errors.duration='La duracion no puede ser mayor a 72 horas'
    else if(duration<1)  errors.duration='La duracion no puede ser menor a 1 horas'

    if(!season) errors.season='Campo requerido'
    
    if(countries.length===0) errors.countries='Campo requerido'

    return errors
}