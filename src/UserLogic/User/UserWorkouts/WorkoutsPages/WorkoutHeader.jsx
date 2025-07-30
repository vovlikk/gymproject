import { useEffect, useState } from "react";
import { Link,  } from "react-router-dom";
import logo from '../../../../Img/Logo/Logo.png'
import '../WorkoutsCss/WorkoutHeader.css'
import { useNavigate } from 'react-router-dom';


function WorkoutHeader(){

    const navigate = useNavigate();
   

    return(
        <header className="workout-header">
            <div className="workout-header-section">
                <div className="workout-header-logo">
                    <img src={logo} alt="" />
                </div>

                <div className="workout-header-links">
                    <Link to="/user/workoutplan">WORKOUT PLAN </Link>
                    <Link>SETS</Link>
                    <Link>BUILD A V-TAPER</Link>
                    <Link>DANCERS</Link>
                </div>

                <div className="workout-header-button">
                
                <button onClick={() => navigate('/user/workoutplan')}>Come Back</button>
                </div>
            </div>
        </header>
    )
}

export default WorkoutHeader;