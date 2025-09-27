import './App.css';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import AboutSection from './AboutSection.jsx';
import CallForPapar from './CallForPapar.jsx';
import ThemesTechnology from './ThemesTechnology.jsx';
import Committees from './Committees.jsx';
// import Speakers from './Speakers.jsx';
import Schedule from './Schedule.jsx';
import SponSorship from './SponSorship.jsx';
import AwardsGrants from './AwardsGrants.jsx';
import RegisterForm from './RegisterForm.jsx';
import Footer from './Footer.jsx';
import AdminTable from './AdminTable.jsx';


function App() {
  return(
    <>
    <Navbar />
    <Home/>
    <AboutSection/>
    <CallForPapar/>
    <ThemesTechnology/>
    <Committees/>
    {/* <Speakers/> */}
    <Schedule/>
    <SponSorship/>
    <RegisterForm/>
    {/* <AdminTable/> */}
    <AwardsGrants/>
    <Footer/>
    </>
  )
}

export default App
