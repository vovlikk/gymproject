import { useState } from "react";

function AddRole(){
    const[user,setuser] = useState('');
    const[loading,setloading] = useState(false);
    const[error, seterror] = useState(null);

    async function Role(e) {
        e.preventDefault();
        seterror(null);
        setloading(true);
        const userrole = {UserName: user}

        try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error("You need Authorization!")
            }
            const response = await fetch('',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(userrole)
            });

            if(!response.ok){
                throw new Error(response.status || "Fail to add role")
            }

            alert('Role added successfully')
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
            <input value={user} onChange={e => setuser(e.target.value)}></input>
            <button onClick={Role}>Add Role</button>
            {loading && <div>Loading....</div>}
            {error && <div style={{color: "red"}}>{error}</div>}
        </div>
    )
}

export default AddRole;