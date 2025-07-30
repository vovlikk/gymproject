import { useState } from "react";
import '../AdminLogic.css/AdminSupport.css'

function AdminSupports(){
    const[adminsupport,setsupport] = useState([]);
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    async function handleGetAllSmsSupport(e){
        e.preventDefault();
        setloading(true);
        seterror(null);
        
        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error("You need authorization")
            }
            const response = await fetch('',{
                method: "GET",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            })

            if(!response.ok){
                throw new Error('Fail to get support sms')
            }
            const data = await response.json();
            setsupport(data);
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false);
        }
    }

    return(
       <div className="get-support-container">
            <div className="get-support-title">
                <h3>Support Messages</h3>
            </div>
            <button className="get-support-button" onClick={handleGetAllSmsSupport}>
                Get All Messages
            </button>

            {loading && <div className="get-support-loading">Loading...</div>}
            {error && <div className="get-support-error">{error}</div>}

            <ul className="get-support-list">
                {adminsupport.map((s) => (
                    <li key={s.Id} className="get-support-item">
                        <strong>Email:</strong> {s.Email} | <strong>Description:</strong> {s.Description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdminSupports;