import { useState } from "react";
import '../AdminLogic.css/AdminReviews.css'

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
        <div className="get-reviews-container">
  <div className="get-reviews-title">
    <h3>All Reviews</h3>
  </div>
  <button className="get-reviews-button" onClick={handleGetAllReviews}>
    Get All Reviews
  </button>

  {loading && <div className="get-reviews-loading">Loading...</div>}
  {error && <div className="get-reviews-error">{error}</div>}

  <ul className="get-reviews-list">
    {adminreviews.map((r) => (
      <li key={r.Id} className="get-reviews-item">
        <strong>Email:</strong> {r.Email} | <strong>Review:</strong> {r.Review}
      </li>
    ))}
  </ul>
</div>
    )
}

export default AdminReview;