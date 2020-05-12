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
    const data = document.getElementById('contact-form');
    const formattedFormData = new FormData(data);
    console.log(formattedFormData)
    // fetch("ContactForm.php",{
    //   method: 'POST',
    //   body: formattedFormData,
    // })
    // .then(res => console.log(res.text()))
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
          className="contact-form__container"
          id="contact-form"
          method="POST"
          // action="ContactForm.php"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <h1 className="contact-form__title">Contact Me</h1>
          <label htmlFor="name" value="Name">
            Name
            <input 
              name="name" 
              type="text" 
              className="contact-form__name"
              onChange={(e) => this.onChange(e)} />
          </label>
          <label htmlFor="email" value="Email">
            Email
            <input 
              name="email" 
              type="email" 
              className="contact-form__email"
              onChange={(e) => this.onChange(e)} />
          </label>
          <label htmlFor="phone" value="Phone Number">
            Phone Number
            <input 
              name="phone" 
              type="tel" 
              className="contact-form__phone"
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
