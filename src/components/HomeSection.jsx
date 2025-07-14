import '../StylesCss/Home.css';
import HomeBigLogo from '../Img/Home/Home-Man-Woman.png'
import Icons from '../Img/Home/Icons.png'
function Home(){
    return(
        <div className="Home">
            <div className="Home-Left-Side">
            <div className="Home-text">
                <h1>Helps for your <br/> ideal body fitness</h1>
                <p>Motivate users with benefits and positive reinforcement,<br/> and offer modifications and progress tracking.</p>
            </div>
            <button className='Home-button'>Start Training</button>
            </div>

            <div className="Home-Right-Side">
                <div className='Home-Right-Side-Text'>
                    <h1>Fitness</h1>
                </div>

                <div className='Home-Right-Side-Img'>
                    <div className='home-right-main-photo'>
                     <img src={HomeBigLogo} alt="" />
                    </div>
                </div>

                <div className='icons'>
                    <div className='icons-info'>
                    <img src={Icons} alt="" />
                    <h3>10K+ Satisfied Customer</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;