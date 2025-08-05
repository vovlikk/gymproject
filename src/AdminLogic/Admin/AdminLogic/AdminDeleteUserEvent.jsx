import { useState } from "react";

function AdminDeleteUserEvent(){
    
    const[id,setId] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);


    async function DeleteEvent() {
        const info = {Id:id}
        setloading(true);
        seterror(null);
        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error("You need authorize");
            }  
            const res = await fetch(`api/`,{
                method:"DELETE",
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body:JSON.stringify(info)
            })

            if(!res.ok){
                throw new Error(`Fail to delete, status: ${res.status}`);
            }

            alert("was succesfull deleted");
            setId('');
        }
        catch(err){
            seterror(err.message)
        }
    }

    return(
        <div>
            <input value={id}  onChange={e => setId(e.target.value)}/>
            <button disabled={loading} onClick={DeleteEvent}>Delete</button>
             {loading && <div>Loading...</div>}
            {error && <div style={{color:"red"}}>{error}</div>}
        </div>
    )
}

export default AdminDeleteUserEvent;