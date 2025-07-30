import { useState } from "react";
import '../UserPagesCss/UserSubscription.css'
import icon from '../../../Img/Pricing/icon.png'



function UserSubscription({onClose}){
    const[message,setmessage] = useState(null);
    const[error,seterror] = useState(null);
    const[loading,setloading] = useState(false);
    async function ChoiseSubscrpition(id) {
  setloading(true);
  seterror(null);
  setmessage(null);
  var info = {subscriptionId: id}
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error("You need Authorization");
    }
    const response = await fetch('/api/User/subscribe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(info)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }

    alert("Succesfull subscribe");

    const text = await response.text();
    setmessage(text);
  } catch (err) {
    seterror(err.message);
  } finally {
    setloading(false);
  }
}

    return(
        <div className="user-subscription-overlay" onClick={onClose}>
            <div className="user-subscription-section" onClick={(e) => e.stopPropagation()}>
                <div className="user-subscription-header">
                    <h1>Our List Packages</h1>
                </div>

                <div className="user-subscription-cards">
                    <div className="sub-card">
                        <div className="sub-card-header">
                            <h4>Basic Package</h4>
                            <h1>$25</h1>
                        </div>

                        <div className="sub-card-body">
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Unlimited Gym Access</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>2x Fitness Consultant</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Nutrition Tracking</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>1x Free Suplement</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>3 Days per week</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Personal Trainer</h3>
                            </div>
                         </div>

                            <div className="sub-card-btn">
                                <button disabled={loading} onClick={() =>ChoiseSubscrpition(1)}>Buy Now</button>
                            </div>
                    </div>

                    <div className="sub-card">
                        <div className="sub-card-header">
                            <h4>Mid Package</h4>
                            <h1>$55</h1>
                        </div>

                        <div className="sub-card-body">
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Unlimited Gym Access</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>4x Fitness Consultant</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Nutrition Tracking</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>3x Free Suplement</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>5 Days per week</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Personal Trainer</h3>
                            </div>
                        </div>

                         <div className="sub-card-btn">
                                 <button disabled={loading} onClick={() => ChoiseSubscrpition(2)}>Buy Now</button>
                            </div>
                    </div>

                    <div className="sub-card">
                        <div className="sub-card-header">
                            <h4>Pro Package</h4>
                            <h1>$75</h1>
                        </div>

                        <div className="sub-card-body">
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Unlimited Gym Access</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>7x Fitness Consultant</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Nutrition Tracking</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>5x Free Suplement</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Gym Card</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Personal Trainer</h3>
                            </div>
                        </div>

                         <div className="sub-card-btn">
                          <button disabled={loading} onClick={() => ChoiseSubscrpition(3)}>Buy Now</button>
                        </div>
                    </div>

                    <div className="sub-card">
                        <div className="sub-card-header">
                            <h4>Athlete Package</h4>
                            <h1>$105</h1>
                        </div>

                        <div className="sub-card-body">
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Unlimited Gym Access</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Free Clothes</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>All Training Program</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Free Fitness Consultant</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Free Suplement</h3>
                            </div>
                            <div className="sub-card-body-info">
                                <img src={icon} alt="" />
                                <h3>Gym Card</h3>
                            </div>
                        </div>

                         <div className="sub-card-btn">
                         <button disabled={loading} onClick={() => ChoiseSubscrpition(4)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
        </div>
    )
}

export default UserSubscription;