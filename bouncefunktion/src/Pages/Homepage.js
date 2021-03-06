import NavbarContainer from '../Containers/Navbar/NavbarContainer';
import HeaderImage from '../Components/HeaderImage/HeaderImage';
import HomepageHeaderImage from '../Assets/TBFheader.jpg';
import BodyContainer from '../Containers/BodyContainer/BodyContainer';
import BounceFunktionPlaylist from '../Components/BounceFunktionPlaylist/BounceFunktionPlaylist';
import BounceFBgroup from '../Components/BounceFunktionPlaylist/BounceFBgroup/BounceFBgroup';

const Homepage = (props) => {
  return (
    <div>
      <NavbarContainer theme={props.theme} toggleTheme={props.themeToggler} />
      <HeaderImage
        backgroundImage={HomepageHeaderImage}
        title="The Bounce Funktion"
        subtitle="A community dedicated to the mutual appreciation of music"
        topMargin="-100px"
        titleFontColour="white"
        subtitleFontColour="lightgray"
      />
      <BounceFunktionPlaylist />
      <BounceFBgroup />
      <BodyContainer />
    </div>
  );
};

export default Homepage;
