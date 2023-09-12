import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postActivity, getActivities, getAll } from '../../Redux/actions/actions'
import s from '../Form/Form.module.css'
import validation from './validation'
import { Link, useLocation } from 'react-router-dom'
import CustomCard from '../CustomCard/CustomCard'

const Form = () => {
    //hooks
    const countries = useSelector(state => state.copyCountries) // accedemos a la variable global, a la copia q esta sin modificar
    countries.sort((a,b)=>a.name.charCodeAt()- b.name.charCodeAt()) // ordenamos de forma alfabetica
    const dispatch = useDispatch()    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search); // para obtener las opciones de la url '/activities?id=abc
    const idDetail = queryParams.get('id');

    //estados
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: idDetail ? [idDetail] : [] , // para la tabla intermedia, debe contener los id de los paises escogidos        
        optionsSelected:idDetail ? [countries.find((country)=>country.id===idDetail)] : [] // para mostar las imagenes de las banderas
    })
    const [errors,setErrrors]= useState({}) // manejo de errores
    const [selectedCountry, setSelectedCountry] = useState(''); // nos sirve para reiniciar el select cada q elegimos un pais
    const [showCustomCard, setShowCustomCard]=useState({// para mostrar la tarjeta personalizada
        text:'',
        color:''
    }) 
    
    useEffect(()=>{        
        setErrrors(validation({...form})) // me sirve para actualizar los errores en la parte de validation, para enviar un [] cuando eliminemos todas las banderas y tmbn deshabilito el boton apenas se monta el componente
        setSelectedCountry('') // para volver a "selected country" en mi select de html
    },[form])
    
    //handlers
    const onSubmit = async (e) => { //enviaremos por body a la URL del back
        e.preventDefault();        
        const activity=await dispatch(postActivity(form)) 
        dispatch(getActivities()) // hasta q no se completa el post no obtengo           
        if(!activity.payload.error) { // si no nos llega error            
            setShowCustomCard({
                ...showCustomCard,
                text:`The tourist activity whit name "${form.name}" was created successfully`,
                color:'green'
            })
            e.target.reset()// limpia el form cuando enviemos la info 
        }else {
            setShowCustomCard({
                ...showCustomCard,
                text:activity.payload.error,
                color:'red'
            })
        }                      
    }
    const handlerInputsChange = (e) => {     //manejador de inputs
        const property = e.target.name;
        const value = e.target.value;
        setErrrors(validation({...form,[property]:value})) // validamos
        setForm({
            ...form,
            [property]: value
        })
    }
    const handlerSelectChange = (e) => { // para la opcion de multiples paises
        const value = e.target.value; 
        setSelectedCountry(value)       
        if(value) { // si la opción es "selected countries" no entra aquí
            const dataCountries = countries.find((country)=>country.id===value) //filtramos por id, para tener los datos del pais elegido
            if(form.optionsSelected.findIndex((elem)=>elem.id===e.target.value)===-1) { // si no existe ya como pais seleccionado
                setForm({
                    ...form,
                    optionsSelected:[...form.optionsSelected,dataCountries],
                    countries:[...form.countries,value] // guardamos el Id q esta en value de cada option
                 })               
            } else{
                alert("Ya elegiste este país")                
            }  
        }
    }
    const handlerRemoveCountry =(id)=>{        
        const newOptionsSelected=form.optionsSelected.filter((elem)=>elem.id!==id) // quitamos del array el que el user presione la X(con el id)
        const countriesResult= form.countries.filter((elem)=>elem!==id) // quitamos tambien de los id guardados en countries
        setForm({
            ...form,
            optionsSelected:newOptionsSelected,
            countries:countriesResult
        })        
    }
    const handlerCloseCard =()=>{
        setShowCustomCard(false)
        if(showCustomCard.color==='green') {
            setForm({  // limpiamos el estado
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: [],      
                optionsSelected:[] 
            })
        }
    }

    return (
        <div className={s.containerForm}>
            <form onSubmit={onSubmit}>               
                <h1>Tourist Activities</h1>
                <label htmlFor='name'>Name of the tourist activity: </label>
                <input
                    name='name'
                    placeholder='type here'
                    type='text'
                    onChange={handlerInputsChange}
                />
                <p className={s.p}>{errors.name}</p>
                <label htmlFor='difficulty'>Difficulty: </label>
                <select name='difficulty' onChange={handlerInputsChange}>
                    <option value=''>Select Difficulty</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                <p className={s.p}>{errors.difficulty}</p>
                <label htmlFor='duration'>Duration in hours: </label>
                <input
                    name='duration'
                    placeholder='type here'
                    type='number'
                    onChange={handlerInputsChange}
                />
                <p className={s.p}>{errors.duration}</p>
                <label htmlFor='season'>Season: </label>
                <select onChange={handlerInputsChange} name='season'>
                    <option value=''>Select season</option>
                    <option value='Winter'>Winter</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>
                </select>
                <p className={s.p}>{errors.season}</p>
                <label htmlFor='countries'>Countries:</label>
                <select
                    value={selectedCountry}                   
                    onChange={handlerSelectChange}
                    name='countries'>                
                    <option value=''>Select Countries</option>
                    {   //mapeamos el arreglo de paises para obtener el nombre en los select
                        countries.map((country) => <option key={country.id} value={country.id}>
                            {country.name}</option>
                        )
                    }
                </select>
                <p className={s.p}> {errors.countries}</p>               
                
                <div className={s.containerFlags}> 
                    
                    {   //muestra las banderas                                       
                        form.optionsSelected.length> 0 ? (//si tiene datos de un pais seleccionado por el user
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
                        ) :<p className={s.p}>Please, you must select at least one country</p>
                    } 
                </div>
                <button type='submit' disabled={Object.keys(errors).length>0}>Create Activity</button>
            </form>
            {
               showCustomCard.text && <CustomCard text={showCustomCard.text} onClose={handlerCloseCard} color={showCustomCard.color}/>
            } 
            
        </div>
    );
}

export default Form;