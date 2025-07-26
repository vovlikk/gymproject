import { useState } from "react"
import '../UserLogic.css/UserReview.css'


function UserReview(){
    const[userName,setuserName] = useState('');
    const[userReview,setDescripReview] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    async function SendReview(e) {
        e.preventDefault();
        setloading(true);
        seterror(null);
        const info = {UserName: userName, Review:userReview }

        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error('You need authorization');
            }
            const response = await fetch('',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            })

            if(!response.ok){
                throw new Error("Fail to send review")
            }

            alert("Send Review Succesfull");
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false);
        }
    }

    return(
       <div className="review-form-container">
    <input
        type="email"
        className="review-input-user"
        placeholder="Enter your user"
        value={userName}
        onChange={e => setuserName(e.target.value)}
    />

    <input
        type="text"
        className="review-input-text"
        placeholder="Enter your Review"
        value={userReview}
        onChange={e => setDescripReview(e.target.value)}
    />

    <button
        className="review-submit-button"
        onClick={SendReview}
    >
        Send Review
    </button>

    {loading && <div className="review-loading">Loading...</div>}
    {error && <div className="review-error-message">{error}</div>}
    </div>
    )
}

export default  UserReview;