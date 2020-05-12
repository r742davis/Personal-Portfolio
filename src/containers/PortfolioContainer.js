import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//---Component Imports---//
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import NavigationPage from "../pages/navigation";
import ProjectsPage from "../pages/projects";
//---Profile Picture---//
import profile from "../images/ProfilePic/Richard-cropped.jpeg";
//---Project Photos---//
import { projectInfo } from "../dataset/projectInfo";

class PortfolioContainer extends React.Component {
  state = {
    modalOpen: false,
    modalNumber: 0,
    showBackdrop: true,
    isOpen: false,
    scrolled: true,
    profilePicture: `${profile}`,
    resumeLink:
      "https://drive.google.com/file/d/1VBspfwo-yLMxVPjm2Wduh5rdoQzQ6BAk/view?usp=sharing",
    projects: [],
  };

  //---Page Animation---//
  componentDidMount() {
    AOS.init({
      duration: 500,
    });

    document.addEventListener("scroll", () => {
      const scrolled = window.scrollY < 500;
      if (scrolled !== this.state.scrolled) {
        this.setState({ scrolled });
      }
    });

    // Wake up apps
    fetch("https://harness-wealth-code-test.herokuapp.com/index.html", {
      mode: "no-cors",
    }).then((res) => console.log("Woke up Harness Wealth app"));

    fetch("https://arcane-brushlands-71780.herokuapp.com/wines", {
      mode: "no-cors",
    }).then((res) => console.log("Woke up Vie Du Vin app"));

    fetch("https://bearmugclub.herokuapp.com/", {
      mode: "no-cors",
    }).then((res) => console.log("Woke up Mug Club app"));

    fetch("https://base-apparel.herokuapp.com/index.html", {
      mode: "no-cors",
    }).then((res) => console.log("Woke up Base Apparel app"));

    this.setState({
      projects: projectInfo,
    });
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  openModal = (number) => {
    this.setState({ modalNumber: number, modalOpen: true });
  };

  render() {
    return (
      <>
        <NavigationPage
          isOpen={this.state.isOpen}
          scrolled={this.state.scrolled}
          toggle={this.toggleMenu}
          resumeLink={this.state.resumeLink}
        />
        <HomePage resumeLink={this.state.resumeLink} />
        <AboutPage
          profile={this.state.profilePicture}
          resumeLink={this.state.resumeLink}
        />
        <ProjectsPage
          modalOpen={this.state.modalOpen}
          modalNumber={this.state.modalNumber}
          showBackdrop={this.state.showBackdrop}
          projects={this.state.projects}
          closeModal={this.closeModal}
          openModal={this.openModal}
        />
        <ContactPage />
      </>
    );
  }
}

export default PortfolioContainer;
