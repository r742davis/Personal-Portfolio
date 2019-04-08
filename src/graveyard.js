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
