import { useState } from "react"



function UserReview(){
    const[Emailreview,setEmailReview] = useState('');
    const[userReview,setDescripReview] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    async function SendReview(e) {
        e.preventDefault();
        setloading(true);
        seterror(null);
        const info = {Email: Emailreview, Review:userReview }

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
        <div>
            <input type="email" placeholder="Enter you Email" value={Emailreview} onChange={e => setEmailReview(e.target.value)}></input>
            <input type="text" placeholder="Enter you Review" value={userReview} onChange={e => setDescripReview(e.target.value)} />
            <button onClick={SendReview}>Send Review</button>
            {loading && <div>Loading...</div>}
            {error && <div style={{color:'red'}}>{error}</div>}
        </div>
    )
}

export default  UserReview;