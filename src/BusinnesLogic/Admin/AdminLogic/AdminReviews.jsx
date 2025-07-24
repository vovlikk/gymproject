import { useState } from "react";

function AdminReview(){
    const[adminreviews,setreviews] = useState([]);
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    async function handleGetAllReviews(e) {
    e.preventDefault(); 
    setloading(true);
    seterror(null);

    try{
        const token = localStorage.getItem('token')
          if(!token) {
                throw new Error("You are not authorized");
            }

            const response = await fetch('',{
                 method: 'GET',
                headers: {"Content-Type":"application/json" ,
                Authorization: `Bearer ${token}`
                },
            })

            if(!response.ok){
                throw new Error('Fail to get reviews')
            }

            const data = await response.json();
            setreviews(data);
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
            <button onClick={handleGetAllReviews}>Get All Reviews</button>
            {loading && <div>Loading...</div>}
            {error && <div style={{color: "red"}}>{error}</div>}
            <ul>
            {adminreviews.map(r =>{
                return <li id={r.Id}>Email: {r.Email} | Review: {r.Review}</li>
            })}
            </ul>
        </div>
    )
}

export default AdminReview;