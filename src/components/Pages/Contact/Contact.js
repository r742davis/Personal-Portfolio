import React from 'react';

import './Contact.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol
} from 'mdbreact';

const contact = () => {
  return (
    <section id="contact">
      <div className="title-container">
        <h1 data-aos="fade-up">Contact Me</h1>
      </div>
      <div className="contact__card-container" data-aos="fade-up">
        <MDBCard className="contact__card box-shadow">
          <MDBCardBody>
            <i className="fab fa-github contact-icon"></i>
            <MDBCardTitle>GITHUB</MDBCardTitle>
            <p><a href="https://github.com/r742davis">r742davis</a></p>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="contact__card box-shadow">
          <MDBCardBody>
            <i className="fas fa-at contact-icon"></i>
            <MDBCardTitle>EMAIL</MDBCardTitle>
            <p><a href="mailto:richardtrowdavis@gmail.com">richardtrowdavis@gmail.com</a></p>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="contact__card social-card box-shadow">
          <MDBCardBody>
            <i className="fas fa-thumbs-up contact-icon"></i>
            <MDBCardTitle>SOCIAL</MDBCardTitle>
            <div className="social-icon-container">
              <a href="https://www.facebook.com/richard.trow.davis">
                <i className="fab fa-facebook social-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/richard-t-davis/">
                <i className="fab fa-linkedin social-icon"></i>
              </a>
              <a href="https://medium.com/@richard.trow.davis">
                <i className="fab fa-medium social-icon"></i>
              </a>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    </section>
  )
}

export default contact;
