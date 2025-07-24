import '../StylesCss/Footer.css';
import Logopng from '../Img/Logo/Logo.png'
function Footer(){
    return(
        <div className="footer-main">
            <div className='footer-sections'>

            <div className='footer-left-side'>

            <div className='footer-logo'>
            <img src={Logopng} alt="" />
            <h2>Gym Center</h2>
            </div>

            <div className='footer-left-text'>
            <h3>Highlight benefits of each <br /> exercise, both physical and <br /> mental</h3>
            </div>

            </div>

            <div className='footer-right-side'>
            <div className='footer-cards'>

            <div className='card-footer'>
            <h1>Sitemap</h1>
            <h2>About</h2>
            <h2>Promos</h2>
            <h2>News & Blog</h2>
            <h2>Help Center</h2>
            </div>

            <div className='card-footer'>
            <h1>Support</h1>
            <h2>FAQ</h2>
            <h2>Support</h2>
            </div>
          
            </div>
            </div>
            
            </div>

        </div>
    )
}

export default Footer;