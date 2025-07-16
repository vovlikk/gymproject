import '../StylesCss/CompanySection.css';
import Icon from '../Img/Company/icon.png'

function Company() {
    return (
        <div>
            <div className="company-divider" /> {/* Линия */}
            <div className="Company-main">
                <div className="company-section">

                    <div className="company-left-side">
                        <img src={Icon} alt="" />
                        <h2>2025 Fitness Center</h2>
                    </div>

                    <div className="company-right-side">
                        <h1>Term of Use</h1>
                        <h1>Privacy Policy</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Company;