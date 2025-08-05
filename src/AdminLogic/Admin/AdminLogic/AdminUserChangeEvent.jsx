import { useState } from "react";



function AdminUserChangeEvent(){
    
    const[id,setId] = useState('');
    const[note,setNote] = useState('');
    const[type,setType] = useState('');
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);

    async function ChangeEvent(e){
        e.preventDefault(); 
        setError(null);
        setLoading(true);

        const info = {Id:id,Note:note,Type:type};
        try{
            if (!id || !type || !note) {
                throw new Error("All fields are required.");
            }
             const token = localStorage.getItem('token');
            if(!token){
                throw new Error("You need authorize");
            }  
            const res = await fetch(`api/`,{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body:JSON.stringify(info)
            })
            if (!res.ok) {
            throw new Error(`Failed to update event. Status: ${res.status}`);
            }

            alert("Event was successfully changed.");
            setId('');
            setNote('');
            setType('');
        }
        catch(err){
            setError(err.message);
        }
        finally{
            setLoading(false);
        }
    }
    return(
        <div>
            <form onSubmit={ChangeEvent}>
                <input value={id} onChange={e => setId(e.target.value)} placeholder="ID"/>
                <input value={type} onChange={e => setType(e.target.value)} placeholder="Enter new type" />
                <input value={note} onChange={e => setNote(e.target.value)} placeholder="Enter new note" />
                <button type="submit" disabled={loading}>Change</button>
            </form>
             {loading && <div>Loading...</div>}
            {error && <div style={{color:"red"}}>{error}</div>}
        </div>
    )
}

export default AdminUserChangeEvent;