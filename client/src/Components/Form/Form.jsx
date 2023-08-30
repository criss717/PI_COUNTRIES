import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity, getActivities } from '../../Redux/actions/actions'
import s from '../Form/Form.module.css'

const Form = () => {
    //estados
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [], // para la tabla intermedia, debe contener los id de los paises escogidos        
        optionsSelected:[] // para mostar las imagenes de las banderas
    })

    //hooks
    const countries = useSelector(state => state.allCountries) // accedemos a la variable global 
    const dispatch = useDispatch()

    //handlers
    const onSubmit = async (e) => { //enviaremos por body a la URL del back
        e.preventDefault();        
        await dispatch(postActivity(form)) 
        dispatch(getActivities()) // hasta q no se completa el post no obtengo
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
        const dataCountries = countries.find((country)=>country.id===e.target.value) //filtramos por id, para tener los datos del pais elegido
        if(form.optionsSelected.findIndex((elem)=>elem.id===e.target.value)===-1) { // si no existe ya como pais seleccionado
            setForm({
                ...form,
                optionsSelected:[...form.optionsSelected,dataCountries],
                countries:[...form.countries,e.target.value] // guardamos el Id q esta en value de cada option
            })   
        }
    }
    const handlerRemoveCountry =(id)=>{
        const newOptionsSelected=form.optionsSelected.filter((elem)=>elem.id!==id) // quitamos del array el que el userpresione la X(con el id)
        setForm({
            ...form,
            optionsSelected:newOptionsSelected
        })
    }

    return (
        <div className={s.container}>
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
                    <option>Select season</option>
                    <option value='Winter'>Winter</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>
                </select>
                <label htmlFor='countries'>Countries:</label>
                <select                   
                    onChange={handlerSelectChange}
                    name='countries'>
                        <option>Select Countries</option>
                    {   //mapeamos el arreglo de paises para obtener el nombre en los select
                        countries.map((country) => <option key={country.id} value={country.id}>
                            {country.name}</option>
                        )
                    }
                </select>
                <div className={s.containerFlags}> 
                    
                    {   //muestra las banderas                    
                        form.optionsSelected.length> 0 ? (//si tiene datos de un pais seleccionadop por el user
                            form.optionsSelected.map((country)=>(
                                <div className={s.flags} key={country.id}>
                                    <img 
                                        src={country.imageFlag}
                                        alt=''                                
                                    />
                                    <button 
                                        onClick={()=>handlerRemoveCountry(country.id)}
                                        className={s.buttonX}
                                    >X</button>                       
                                </div>
                            )) 
                        ) :<p>Please, you must select at least one country</p>
                    } 
                </div>
                <button type='submit'>Create Activity</button>
            </form>
        
        </div>
    );
}

export default Form;