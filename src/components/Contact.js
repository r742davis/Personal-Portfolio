import React, { Component } from 'react';
import './Styling/Contact.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol
} from 'mdbreact';

class Contact extends Component {
  render() {
    return (
      <>
      <section id="contact">
        <div className="title-container">
          <h1 data-aos="fade-up">Contact Me</h1>
        </div>
          <div className="contact-container" data-aos="fade-up">
          <MDBCol>
            <MDBCard className="card-container">
              <MDBCardBody>
                <i className="fab fa-github contact-icon"></i>
                <MDBCardTitle>GITHUB</MDBCardTitle>
                <p><a href="https://github.com/r742davis">
                  r742davis
                </a></p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="card-container">
              <MDBCardBody>
                <i className="fas fa-at contact-icon"></i>
                <MDBCardTitle>EMAIL</MDBCardTitle>
                <p><a href="mailto:richardtrowdavis@gmail.com">
                richardtrowdavis@gmail.com
                </a></p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="card-container social-card">
              <MDBCardBody>
                <i className="fas fa-thumbs-up contact-icon"></i>
                <MDBCardTitle>SOCIAL</MDBCardTitle>
                <div className="social-icon-container">
                  <a href="https://www.facebook.com/richard.trow.davis"><i className="fab fa-facebook social-icon"></i></a>
                  <a href="https://www.linkedin.com/in/richard-t-davis/"><i className="fab fa-linkedin social-icon"></i></a>
                  <a href="https://medium.com/@richard.trow.davis"><i className="fab fa-medium social-icon"></i></a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </div>
      </section>
      </>
    )
  }
}

export default Contact;
