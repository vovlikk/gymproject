import { useState } from "react";


function AdminUserCalendar(){
    const[data,setData] = useState([]);
    const[error,setError] = useState(null);
    const[loading,setLoading] = useState(false);

    async function GetUserCalendar(e) {
        e.preventDefault();
        setLoading(null);
        setLoading(true);

        try{
            const token = await localStorage.getItem('token');
            if(!token){
                throw new Error("You need authorize");
            }

            const response = await fetch('');
            if(!response.ok){
                throw new Error("Fail to get response",response.status);
            }

            const user = await response.json();
            setData(user);
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <div>
            <button onClick={GetUserCalendar}>Get All Info</button>
            <ul>
                {data.map(e =>{
                    return <li key={e.id}>{e.note}:{e.type}</li>
                })}
            </ul>
            {loading && <div>Loading...</div>}
            {error && <div style={{color:"red"}}>{error}</div>}
        </div>
    )
}

export default AdminUserCalendar;