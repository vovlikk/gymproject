import { useState } from "react";





function Users(){  
    const[users,setusers] = useState([]);
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    
    async function handleGetAllUsers(e) {
        e.preventDefault();
        setloading(true);
        seterror(null);
        
        try{
            const token = localStorage.getItem('token')
            const response = await fetch('' ,{
                headers: {
                    method: 'GET',
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${token}`
                }
            });
           
            
            if(!response.ok){
                throw new Error("Fail to get users")
            }

            const data = await response.json();
            setusers(data);
        }
        catch(err){
            seterror(err.message)
        }
        finally{
            setloading(false)
        }
    }

    return(
        <div>
            <button onClick={handleGetAllUsers}>Get All Users</button>
            <ul>
                {loading && <div>Loading...</div>}
                {error && <div style={{color:'red'}}>{error}</div>}
                {users.map(u =>{
                    return <li key={u.Id}>Email: {u.Email} Name: {u.userName}</li>
                })}
            </ul>
        </div>
    )

    

}

export default Users;