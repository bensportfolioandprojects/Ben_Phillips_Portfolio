//import NavBar from './NavBar';
import Header from "./Header";
import AboutMe from "./AboutMe";
import PastWork from './PastWork';
import Skills from './Skills'
import ContactDetails from "./ContactDetails";
import NavBar from "./NavBar";


const HomePage = () => {
    return (
        <>
        <NavBar />
        <Header />
        <AboutMe />
        <Skills />
        <PastWork />
        <ContactDetails />
        </>

    );
}

export default HomePage;