import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity, getActivities } from '../../Redux/actions/actions'


const Form = () => {
    //estados
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
    })

    //hooks
    const countries = useSelector(state => state.allCountries) // accedemos a la variable global 
    const dispatch = useDispatch()
    //handlers
    const onSubmit = (e) => { //enviaremos por body a la URL del back
        e.preventDefault();
        dispatch(postActivity(form)) // envaimos el estado form con todos los datos escritos y seleccionados por el user
        dispatch(getActivities()) 
    }
    const handlerInputsChange = (e) => {     //manejador de inputs
        const property = e.target.name;
        const value = e.target.value;
        setForm({
            ...form,
            [property]: value
        })
    }
    const handlerSelectChange = (e) => { // para la opcion de multiples paises
        const optionSelected = Array.from(e.target.selectedOptions, option=>option.value) // volvemos un array con los ID de las opciones escogidas
        setForm({
            ...form,
            countries:optionSelected
        })
    }
    return (
        <div>
            <h1>Tourist Activities</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name of the tourist activity: </label>
                <input
                    name='name'
                    placeholder='type here'
                    type='text'
                    onChange={handlerInputsChange}
                />
                <label htmlFor='difficulty'>Difficulty: </label>
                <select name='difficulty' onChange={handlerInputsChange}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <label htmlFor='duration'>Duration in hours: </label>
                <input
                    name='duration'
                    placeholder='type here'
                    type='number'
                    onChange={handlerInputsChange}
                />
                <label htmlFor='season'>Season: </label>
                <select onChange={handlerInputsChange} name='season'>
                    <option value='Winter'>Winter</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>
                </select>
                <label htmlFor='countries'>Countries:</label>
                <select
                    multiple // habilita la opción de escoger varios
                    onChange={handlerSelectChange}
                    name='countries'>
                    {   //mapeamos el arreglo de paises para obtener el nombre en los select
                        countries.map((country) => <option key={country.id} value={country.id}>
                            {country.name}</option>
                        )
                    }
                </select>
                <button type='submit'>Crear</button>
            </form>

        </div>
    );
}

export default Form;