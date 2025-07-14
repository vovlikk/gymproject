import { useState } from "react";

function Register(){
    const[reguserName, setUserName] = useState('');
    const[regpassword, setPassword] = useState('');  
    const[loading,setloading] = useState(false);
    const[error,setError] = useState(null);

    async function HandleSubmit(e) {
        e.preventDefault();
        setError(null);
        setloading(true);

        const user = {  UserName:reguserName, Password:regpassword }

        try{
            const response = await fetch('',{
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify(user)
            });
            if(!response.ok){
                const responserror = await response.json().catch(() => null);
                alert(responserror?.status || "Registration error");
            }
            alert('Register Succesfull')
        }
        catch(err){
            setError(err.message || "Registration failed")
        }
        finally{
            setloading(false);
        }
    }

    return(
       
        <div className="Register-Form">
            {error && <div style={{ color: 'red', fontWeight: 'bold', fontSize: '14px' }}>{error}</div>}
            <div className="Register-Input">
                <input onChange={e => setUserName(e.target.value)} value={reguserName} type="text" placeholder="Please Enter Name"></input>
                 <input onChange={e => setPassword(e.target.value)} value={regpassword} type="password" placeholder="Please Enter Password"></input>
            </div>
            {loading && <div>Loading...</div>}
            <button type="submit" onClick={HandleSubmit}>Register</button>
        </div>
    )
}

export default Register;