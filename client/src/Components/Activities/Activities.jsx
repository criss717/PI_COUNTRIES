import React from 'react'
import { useSelector } from 'react-redux';
import CardActivity from '../CardActivity/CardActivity';
import { Link } from 'react-router-dom';
const Activities = () => {
    //hooks
    const activities= useSelector(state=>state.activities) // treaemos el estado global activities
    
    return (       
        <div>
            <h1>Tourist Activities</h1>
            <Link to='/home'>
                <button>Atras</button>
            </Link>
            {
                activities.length>0 &&
                activities.map((activity)=><CardActivity
                    key={activity.id}
                    name={activity.name}
                    duration={activity.duration}
                    difficulty={activity.difficulty}
                    season={activity.season}
                    Countries={activity.Countries}
                />)
               
            }
           
        </div>
    );
}
 
export default Activities;