import React, { Component } from "react";
import Form from "../components/Form";
import Utilities from "../components/Utilities";

class Contact extends Component {
  componentDidMount() {
    Utilities.makeFunLetters2("contact-intro");
  }

  render() {
    return (
      <main>
        <h1 id="contact-intro" className="display-2">
          Want to Hire Me?
        </h1>
        <p>Drop me a note about job opportunities or anything else!</p>
        <Form />
      </main>
    );
  }
}

export default Contact;
