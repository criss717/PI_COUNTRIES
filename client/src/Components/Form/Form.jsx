import React, { useState } from 'react'

const Form = () => {
    // const[form,setForm] = useState({
    //     name,
    //     difficulty,
    //     duration,
    //     season,
    //     countries,        
    // })
    return (
        <div>
            <h1>Tourist Activities</h1>
            <form>
                <label htmlFor='name'>Name of the tourist activity: </label>
                <input
                    name='name'
                    placeholder='type here'
                    type='text'
                />
                <label htmlFor='difficulty'>Difficulty: </label>
                <select name='difficulty'>
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
                />
                <label htmlFor='season'>Season: </label>
                <select name='season'>
                    <option value='Winter'>Winter</option>
                    <option value='Summer'>Summer</option>
                    <option value='Autumn'>Autumn</option>
                    <option value='Spring'>Spring</option>                    
                </select>
            </form>

        </div>
    );
}
 
export default Form;