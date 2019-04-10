import React, { Component } from 'react';
import {
  MDBCol, MDBContainer, MDBRow, MDBFooter
} from 'mdbreact';

class Footer extends Component {
  render() {
    return (
      <>
        <MDBFooter color="blue" className="footer font-small pt-4 mt-4">
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright - <a href="https://www.MDBootstrap.com"> Portfolio created using ReactJS, Bootstrap, and Sass </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </>
    )
  }
}

export default Footer;
