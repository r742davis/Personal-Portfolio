import project_1 from "../images/ProjectPics/sick-fits.png";
import project_2 from "../images/ProjectPics/mug_club.png";
import project_3 from "../images/ProjectPics/harness-wealth-test.png";
import project_4 from "../images/ProjectPics/retro-computers.jpg";
import project_5 from "../images/ProjectPics/wine.jpg";
import project_6 from "../images/ProjectPics/bakersdozen.jpg";

export const projectInfo = [
  {
    id: 1,
    name: "Sick Fits",
    image: `${project_1}`,
    alt: "Sick Fits Website Image",
    description:
      "**Under Construction**",
    tech: "React, GraphQL, Apollo, Yoga, Styled Components, Stripe",
    linkOne: "",
    linkTwo: "https://github.com/r742davis/sick-fits",
    nameOne: "Website",
    nameTwo: "GitHub"
  },
  {
    id: 2,
    name: "Mug Club App",
    image: `${project_2}`,
    alt: "mug club bear",
    description:
      "The Madison Bear Garden needed a better way to track their Mug Club members. I developed a mobile-friendly web app that will help them track their members' Mug Club progress using a Heroku-hosted MongoDB database. Test email: test1@gmail.com - Test password: test",
    tech: "React.js, Express.js, Node.js, MongoDB, Sass, Heroku",
    linkOne: "https://bearmugclub.herokuapp.com/",
    linkTwo: "https://github.com/r742davis/mug_club",
    nameOne: "Website",
    nameTwo: "GitHub"
  },
  {
    id: 3,
    name: "Harness Wealth Landing Page",
    image: `${project_3}`,
    alt: "Harness Wealth Landing Page",
    description:
      "A mobile-responsive landing page web app created for Harness Wealth, a fintech startup.",
    tech: "HTML5, CSS3",
    linkOne: "https://harness-wealth-code-test.herokuapp.com/index.html",
    linkTwo: "https://github.com/r742davis/Harness-Wealth-Code-Test",
    nameOne: "Website",
    nameTwo: "GitHub"
  },
  {
    id: 4,
    name: "Portfolio Website",
    image: `${project_4}`,
    alt: "computers on a desktop",
    description:
      "I wanted to challenge myself to build a portfolio website using React and SASS. I built this portfolio using industry conventions, such as using functional components, separating out SCSS into component-specific files, and programmatically generating multiple components.",
    tech: "React, SASS, Bootstrap 4",
    linkOne: "https://github.com/r742davis/portfolio_1",
    linkTwo: "",
    nameOne: "GitHub",
    nameTwo: ""
  },
  {
    id: 5,
    name: "Vie Du Vin",
    image: `${project_5}`,
    alt: "wines glass and bottle with cheese and grapes",
    description:
      "This was my final project for the General Assembly immersive web development program. I built a full-stack personal wine tracker app that saves your wine lists according to the user who signs up and logs in.",
    tech: "React, Redux, JWTs, MongoDB, Express.js, Node.js",
    linkOne: "https://arcane-brushlands-71780.herokuapp.com/wines",
    linkTwo: "https://github.com/r742davis/vie_du_vin_frontend",
    nameOne: "Website",
    nameTwo: "GitHub"
  },
  // {
  //   id: 5,
  //   name: "Traveleritis",
  //   image: `${project_7}`,
  //   alt: "travel website",
  //   description:
  //     "This was a collaborative project at General Assembly where we built a travel planning site based around a custom API. The app is designed to help you plan trips and save them depending on the user authentication.",
  //   tech:
  //     "MEAN Stack (Mongoose, Express.js, AngularJS, Node.js), MVVM Method",
  //   linkOne: "https://traveleritis.herokuapp.com",
  //   linkTwo: "https://github.com/sharonmertens/branchforce",
  //   link3: "",
  //   nameOne: "Traveleritis Website",
  //   nameTwo: "Project Code",
  //   linkName3: ""
  // },
  {
    id: 6,
    name: "Baker's Dozen",
    image: `${project_6}`,
    alt: "baker's dozen website",
    description:
      "Baker's Dozen is an app where you can keep your favorite bakedgoods recipes and have them displayed beautifully. I created this project during my time at General Assembly and built in full authentication into the app.",
    tech:
      "JavaScript, Express.js, Mongoose, MongoDB, NodeJS, EJS, HTML5, CSS3",
    linkOne: "https://bakersdozen-project.herokuapp.com/bakersdozen",
    linkTwo: "https://github.com/r742davis/Project_2",
    link3: "",
    nameOne: "Website",
    nameTwo: "Project Code",
    linkName3: ""
  }
];