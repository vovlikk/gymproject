import '../UserProgress.css/UserProgressGrafics.css'
function UserProgressGrafic({onClose}){
    return(
        <div className="user-progress-grafic-overlay" onClick={onClose}>
            <div className="user-progress-grafic-sections">
                <h5>graf</h5>
            </div>
        </div>
    )
}

export default UserProgressGrafic;