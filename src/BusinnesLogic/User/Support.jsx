import React,{useState} from "react";

function Support(){
    const[emailSup,setEmail] = useState('');
    const[description,setDescrip] = useState('');
    const[loading,setloading] = useState(false);
    const[error,seterror] = useState(null);

    async function HandlerMessage() {
        setloading(true);
        seterror(null);
        const sms = {Email:emailSup, Description: description };

        try{
            const response = await fetch('',{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(sms)
            })

            if(!response.ok){
                const responseError = await response.json().catch(() => null);
                throw new Error(responseError?.status || "Failed to send");
            }
            
            alert("Succesfull");

        }
        catch(err){
            seterror(err.message || "Fail to send")
        }
        finally{
            setloading(false)
            setDescrip('');
            setEmail('');
        }
    }

    return(
        <div>
            <div>
                <input placeholder="Enter your Email" value={emailSup} onChange={e => setEmail(e.target.value)}></input>
                <input placeholder="Enter your Descrip" value={description} onChange={e => setDescrip(e.target.value)}></input>
                <button onClick={HandlerMessage}>Send</button>
                {loading && <div>Loading...</div>}
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </div>
    )
}


export default Support;