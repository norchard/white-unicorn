import React from "react";
import Utilities from "./Utilities";
import Lottie from "lottie-react";
import happyStars from "../assets/lf30_editor_sxisnuui.json";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", name: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const stateObject = {};
    stateObject[event.target.name] = event.target.value;
    this.setState(stateObject);
  }

  handleSubmit(event) {
    const templateId = "template_z04dkym";
    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
    });

    const form = document.getElementById("email-form");
    form.style.display = "none";
    const thanks = document.getElementById("thank-you");
    thanks.style.display = "block";
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("service_j2530if", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  componentDidMount() {
    Utilities.FadeInUp("formButton");
  }

  render() {
    return (
      <form>
        <div id="email-form">
          <input
            onMouseOver={() => {
              document.getElementById("cursor").style.visibility = "hidden";
              document.getElementById("circle").style.visibility = "hidden";
            }}
            onMouseOut={() => {
              document.getElementById("cursor").style.visibility = "visible";
              document.getElementById("circle").style.visibility = "visible";
            }}
            className="m-2"
            name="email"
            onChange={this.handleChange}
            required
            value={this.state.email}
            placeholder="Email"
          />

          <input
            onMouseOver={() => {
              document.getElementById("cursor").style.visibility = "hidden";
              document.getElementById("circle").style.visibility = "hidden";
            }}
            onMouseOut={() => {
              document.getElementById("cursor").style.visibility = "visible";
              document.getElementById("circle").style.visibility = "visible";
            }}
            className="m-2"
            name="name"
            onChange={this.handleChange}
            required
            value={this.state.name}
            placeholder="Name"
          />
          <textarea
            onMouseOver={() => {
              document.getElementById("cursor").style.visibility = "hidden";
              document.getElementById("circle").style.visibility = "hidden";
            }}
            onMouseOut={() => {
              document.getElementById("cursor").style.visibility = "visible";
              document.getElementById("circle").style.visibility = "visible";
            }}
            className="m-2"
            name="message"
            onChange={this.handleChange}
            placeholder="Message"
            required
            value={this.state.message}
            style={{ width: "100%", height: "150px" }}
          />

          <input
            id="formButton"
            className="button gradient"
            onMouseOver={Utilities.handleMouseOver}
            onMouseOut={Utilities.handleMouseOut}
            type="button"
            value="Submit"
            onClick={this.handleSubmit}
          />
        </div>
        <div id="thank-you">
          <Lottie
            id="thank-you-lottie"
            animationData={happyStars}
            loop={true}
          />
          <h2>Thank you for the message!</h2>
          <h4>I'll get back to you soon.</h4>
        </div>
      </form>
    );
  }
}
