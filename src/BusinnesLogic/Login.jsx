import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const[logUserName,setlogUserName] = useState('');
    const[logpassword,setlogPassword] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);
    
    const navigate = useNavigate();

    async function HandlerLogin(){
        seterror(null);
        setloading(true);
        

        var userlogin = { UserName: logUserName,Password: logpassword };
        try{
            const response = await fetch('',{
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify(userlogin)
            });
            if(!response.ok){
                const resperror = await response.json().catch(() => null);
                throw new Error(resperror?.Error || "Fail Login")
            }
            const data = await response.json();
            localStorage.setItem('token', data.token); // сначала сохрани токен
            if (data.role === "Admin") {
                navigate('/'); // потом перенаправь
            } else {
                navigate('/user'); // если другой пользователь
            }
        }
        catch(err){
            seterror(err.message || "Fail Login")
        }
        finally{
            setloading(false);
            setlogPassword('');
            setlogUserName('');
        }
    }

    return(
        <div>
            <input value={logUserName} type="text" onChange={e => (setlogUserName(e.target.value))} placeholder="Please enter Name"></input>
            <input value={logpassword} type="password" onChange={e => (setlogPassword(e.target.value))} placeholder="Please enter Password"></input>
        </div>
    )
}

export default Login;