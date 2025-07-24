import { useState } from "react";

function AddRole(){
    const[RoleUserName,setRoleUser] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    async function handleAddRole(params) {
        setloading(true);
        seterror(null);
        const info = {UserName:RoleUserName};
        try{
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization!");
            }

            const response = await fetch('', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error("Failed to add role");
            }
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
            <input type="email" 
            placeholder="Enter  email" 
            value={RoleUserName} 
            onChange={e => setRoleUser(e.target.value)} 
            required
            />
            <button onClick={handleAddRole}>Add Role</button>
        </div>
    )
}
export default AddRole;