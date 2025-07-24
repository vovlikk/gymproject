import { useState } from "react";

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
        <div>
            <button onClick={handleGetAllSmsSupport}>Get all Sms</button>
            {loading && <div>Loading...</div>}
            {error && <div style={{color:"red"}}>{error}</div>}

            <ul>
                {adminsupport.map(s =>{
                    return <li key={s.Id}>Email:{s.Email} | Descriprion: {s.Description}</li>
                })}
            </ul>
        </div>
    )
}

export default AdminSupports;