import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import AboutSection from './AboutSection.jsx';
import CallForPapar from './CallForPapar.jsx';
import ThemesTechnology from './ThemesTechnology.jsx';
import Committees from './Committees.jsx';
import Schedule from './Schedule.jsx';
import RegisterForm from './RegisterForm.jsx';
import Footer from './Footer.jsx';
import Expert from './Expert.jsx';


function App() {
  return(
    <>
    <Navbar />
    <Home/>
    <AboutSection/>
    <CallForPapar/>
    <ThemesTechnology/>
    <Committees/>
    <Schedule/>
    <Expert/>
    <RegisterForm/>
    <Footer/>
    </>
  )
}

export default App
