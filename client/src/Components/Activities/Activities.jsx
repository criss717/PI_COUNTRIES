import React from 'react'
import { useSelector } from 'react-redux';
import CardActivity from '../CardActivity/CardActivity';
import { Link } from 'react-router-dom';
import s from '../Activities/Activities.module.css'
const Activities = () => {
    //hooks
    const activities= useSelector(state=>state.activities) // treaemos el estado global activities
    
    return (       
        <div className={s.containerActivities}>
            <h1>Tourist Activities</h1>           
            <div className={s.cardsActivities}>
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
        </div>
    );
}
 
export default Activities;