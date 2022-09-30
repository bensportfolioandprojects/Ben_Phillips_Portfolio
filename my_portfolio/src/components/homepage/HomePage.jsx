//import NavBar from './NavBar';
import Header from './Header';
import AboutMe from './AboutMe';
import Education from './Education';
import Career from './Career'


const HomePage = () => {
    return (
        <>
        <Header />
        <img src="CV Photo Cropped.JPEG" alt="CVPhoto" className="CVPhoto"/>
        <AboutMe />
        <Career />
        <Education />
        <ContactDetails />
        </>

    );
}

export default HomePage