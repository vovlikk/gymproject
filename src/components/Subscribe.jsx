import '../StylesCss/Subscribe.css';
function Subscribe(){
    return(

    <div className="subscribe-main">
        <div className="subscribe-section">
            <div className="subscribe-text">
            <h1>Subscribe our fitness tips</h1>
            <p>Clearly communicate the benefits of subscribing, such as exclusive content</p>
             <p className="sub-bottom-text">and breaking news.</p>
            </div>

            <div className="subscribe-input">
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe</button>
            </div>
        </div>
    </div>
    )
}

export default Subscribe;