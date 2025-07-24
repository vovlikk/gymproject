import { useState } from "react";
import UserChangePassword from "../UserLogic/UserChangePassword";
import UserChangeName from "../UserLogic/UserChangeName";




function UserSettings(){
    const[choise,setchoise] = useState('change-password');
    <div className="user-settings">

        <div className="settings-buttons">
            <button onClick={() => setchoise('change-password')}>Change Password</button>
            <button onClick={() => setchoise('change-name')}>Change Name</button>
        </div>

        <div className="settings-tabs">
            <div className="settings-change-passoword">
            {choise === 'change-password' && (
                <UserChangePassword />
            )}
            </div>

            <div className="settings-change-name">
            {choise === 'change-name' && (
                <UserChangeName />
            )}
            </div>
        </div>

    </div>
}

export default UserSettings;