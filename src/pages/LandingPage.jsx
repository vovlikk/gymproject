
import Home from '../components/HomeSection';
import Header from '../components/Header';
import ProgramSection from '../components/ProgramSection'
import Transform  from '../components/TransformSection';
import LifeStyle from '../components/LifeStyleSection';

function LandingPage(){
    return(
        <div>
            <Header />
            <Home />
            <ProgramSection />
            <Transform />
            <LifeStyle />
        </div>
    )
}

export default LandingPage;