import React from "react";
import "./ContactForm.css";

class ContactForm extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("./ContactForm.php",{
      method: 'POST',
      body: this.state,
      headers : {
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log(res))
  };

  onChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <>
        <form
          class="contact-form__container"
          method="post"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <h1 class="contact-form__title">Contact Form</h1>
          <label htmlFor="name" value="Name">
            Name
            <input 
              name="name" 
              type="text" 
              onChange={(e) => this.onChange(e)} />
          </label>
          <label htmlFor="email" value="Email">
            Email
            <input 
              name="email" 
              type="email" 
              onChange={(e) => this.onChange(e)} />
          </label>
          <label htmlFor="phone" value="Phone Number">
            Phone Number
            <input 
              name="phone" 
              type="tel" 
              onChange={(e) => this.onChange(e)} />
          </label>
          <label htmlFor="message" value="Message">
            Message
            <textarea
              name="message"
              className="contact-form__message"
              onChange={(e) => this.onChange(e)}
            ></textarea>
          </label>
          <button 
            type="submit" 
            className="contact-form__submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
