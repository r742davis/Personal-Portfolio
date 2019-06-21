//Typewriter Effect
static defaultProps = {
  heading: '',
  dataText: []
}

constructor(props) {
  super(props)

  this.state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 300
  }
}

componentDidMount() {
  this.handleType()
}

handleType = () => {
  const { dataText } = this.props;
  const { isDeleting, loopNum, text, typingSpeed } = this.state;
  const i = loopNum % dataText.length;
  const fullText = dataText[i];

  this.setState({
    text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1), typingSpeed: isDeleting ? 40 : 100
  });

  if (!isDeleting && text === fullText) {
    setTimeout( () => this.setState({ isDeleting: true }), 500)
  } else if (isDeleting && text === '') {
    this.setState({
      isDeleting: false,
      loopNum: loopNum + 1
    })
  }

  setTimeout(this.handleType, typingSpeed);
};

//Router Code
  <Route path="/" exact component={Home} />
  <Route path="/about" component={About} />
  <Route path="/projects" component={Projects} />
  <Route path="/contact" component={Contact} />

  //Scrolling snippets
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    console.log("Scroll event triggered!");
  }

//Parallax CSS
/***************************/
/*** Parallax Background ***/
/***************************/
// .main-container {
//   perspective: 1px;
//   transform-style: preserve-3d;
//   height: 100vh;
//   overflow-x: hidden;
//   overflow-y: scroll;
// }
//
// .parallax-container {
//   display: flex;
//   flex-direction: column;
//   flex: 1 0 auto;
//   position: relative;
//   height: 100vh;
//   width: auto;
//   transform: translateZ(-5px) scale(6);
//   z-index: -1;
//   background: url("./images/patterned-colors.jpg");
//   background-repeat: no-repeat;
//   background-size: contain;
//   margin-left: -38px;
// }


//Button
<div className="cv-button-container">
  <MDBBtn className="cv-button" data-aos="fade-up"><a href="https://drive.google.com/open?id=1XL9bvtIZfgzgDIp401hvK6Y-RZ6N70GK" target="_blank">Download CV</a></MDBBtn>
</div>

//Top Skills Section
<MDBCard>
  <MDBCardBody>
    <MDBCardTitle>Top Skills</MDBCardTitle>
    <MDBListGroup>
      <MDBListGroupItem>HTML/CSS</MDBListGroupItem>
      <MDBListGroupItem>JavaScript</MDBListGroupItem>
      <MDBListGroupItem>Ruby</MDBListGroupItem>
      <MDBListGroupItem>Ruby on Rails</MDBListGroupItem>
      <MDBListGroupItem>ReactJS</MDBListGroupItem>
      <MDBListGroupItem>PostgreSQL</MDBListGroupItem>
      <MDBListGroupItem>MongoDB</MDBListGroupItem>
    </MDBListGroup>
  </MDBCardBody>
</MDBCard>


//Contact button
<Button
  className="contact-button"
  color="primary"
  href="#contact"
>Contact Me</Button>

/*** Contact Button on Home Page ***/
.contact-button {
  width: 200px;
  border-radius: 1em;
  transition: 0.5s;
  @include respond-to('medium') { width: 368px; }
}

// Brand
  <NavbarBrand
  className={this.state.scrolled ? "navbar-brand text-white" : "navbar-brand-recolored"}
  href="/"
  >Richard
  </NavbarBrand>


// Skills container
<div className="skills-list-container" data-aos="fade-up">
  <h1>Tech Skills</h1>
  <hr />
  <ul>
    <li><i className="fas fa-check-circle skill-icon html"></i>HTML/CSS</li>
    <li><i className="fas fa-check-circle skill-icon javascript"></i>React</li>
    <li><i className="fas fa-check-circle skill-icon javascript"></i>Node.js</li>
    <li><i className="fas fa-check-circle skill-icon ruby"></i>Ruby</li>
    <li><i className="fas fa-check-circle skill-icon ruby"></i>Ruby on Rails</li>
    <li><i className="fas fa-check-circle skill-icon databases"></i>PostgreSQL</li>
    <li><i className="fas fa-check-circle skill-icon databases"></i>MongoDB</li>
  </ul>
  <hr />
</div>

// CV Button
<div className="cv-button-container">
  <MDBBtn className="cv-button">
    <a
      href="https://drive.google.com/open?id=1XL9bvtIZfgzgDIp401hvK6Y-RZ6N70GK"
      target="_blank"
      rel="noopener noreferrer">Download CV
    </a>
  </MDBBtn>
</div>

<img
  src={project_1}
  className="project-grid"
  alt="project 1"
  onClick={() => this.openModal(1)}
/>
<img
  src={project_2}
  className="project-grid"
  id="project-grid-2"
  alt="project 2"
  onClick={() => this.openModal(2)}
/>
<img
  src={project_3}
  className="project-grid"
  id="project-grid-3"
  alt="project 3"
  onClick={() => this.openModal(3)}
/>
<img
  src={project_4}
  className="project-grid"
  id="project-grid-4"
  alt="project 4"
  onClick={() => this.openModal(4)}
/>
<img
  src={project_5}
  className="project-grid"
  id="project-grid-5"
  alt="project 5"
  onClick={() => this.openModal(5)}
/>
<img
  src={project_6}
  className="project-grid modal-six"
  id="project-grid-6"
  alt="project 6"
  onClick={() => this.openModal(6)}
/>
