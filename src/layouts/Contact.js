import React, { Component } from "react";
import "../style/Contact.sass";

class Contact extends Component {
  state = {
    name: "",
    mail: "",
    topic: "",
    message: ""
  };

  handleChangeName = e => {
    this.setState({
      name: e.value
    });
  };

  handleChangeMail = e => {
    this.setState({
      mail: e.value
    });
  };

  handleChangeTopic = e => {
    this.setState({
      topic: e.value
    });
  };

  handleChangeMessage = e => {
    this.setState({
      message: e.value
    });
  };

  handleClickForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="wrapperContact">
        <section className="contact">
          <h1>Kontakt</h1>
          <form>
            <h2>Napisz do mnie!</h2>
            <input
              onChange={this.handleChangeName}
              value={this.state.name}
              className="name"
              type="text"
              placeholder="Imię i nazwisko"
            />
            <input
              onChange={this.handleChangeMail}
              value={this.state.mail}
              className="mail"
              type="email"
              placeholder="E-mail"
            />
            <input
              onChange={this.handleChangeTopic}
              value={this.state.topic}
              className="topic"
              type="text"
              placeholder="Temat"
            />
            <textarea
              onChange={this.handleChangeMessage}
              value={this.state.message}
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Wiadomość"
            />
            <button onClick={this.handleClickForm}>Wyślij</button>
          </form>
        </section>
      </section>
    );
  }
}

export default Contact;
