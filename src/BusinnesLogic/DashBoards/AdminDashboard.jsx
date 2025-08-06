import { useEffect, useState } from "react";
import AdminHeader from '../../AdminLogic/Admin/AdminPages/AdminHeader'
import AdminHomePage from "../../AdminLogic/Admin/AdminPages/AdminHomePage";



function AdminDashboard(){
    const[admin,setadmin] = useState(null);
    const[error,seterror] = useState(null);

    useEffect(() =>{
        const token = localStorage.getItem('token');
        if(!token){
            throw new Error('You need authorize');
        }

        fetch('https://06a31ca0ee9b.ngrok-free.app/api/values/profile',{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Authorization:`Bearer ${token}`,
                "ngrok-skip-browser-warning": "true"
            },
        })
        .then(async (res) =>{
            const text = await res.text();
            console.log("Ответ от сервера:", text);

            if (!res.ok) {
            throw new Error(`Ошибка сервера: ${res.status} ${res.statusText}`);
            }

            return JSON.parse(text);
        })
        .then(data => setadmin(data))
        .catch(err => {
            console.error("Ошибка загрузки:", err);
            seterror(err)
        })
    },[])


    return(
        <div>
        {admin ? (
        <>
            <AdminHeader admin={admin} />
           
        </>
        ) : error ? (
        <p>Ошибка: {error.message}</p>
        ) : (
        <p>Загрузка данных администратора...</p>
        )}
  </div>
    )
}

export default AdminDashboard;