import React, { Component } from "react";
import "../style/Contact.sass";

const isSpace = name => {
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") return true;
  }
  return false;
};

const isMail = mail => {
  let monkey = false;
  let dot = false;
  for (let i = 0; i < mail.length; i++) {
    if (mail[i] === "@") monkey = true;
    if (mail[i] === ".") dot = true;
  }

  if (monkey && dot) return true;
  return false;
};

const formValidation = function(name, mail, topic, message) {
  let flagName = false;
  let flagMail = false;
  let flagTopic = false;
  let flagMessage = false;

  if (name.length > 5 && isSpace(name)) flagName = true;
  if (mail.length > 5 && isMail(mail)) flagMail = true;
  if (topic.length > 0) flagTopic = true;
  if (message.length > 10) flagMessage = true;
  if (flagName && flagMail && flagTopic && flagMessage) {
    return "clear";
  } else {
    const erroArr = [];
    if (!flagName) erroArr.push("name");
    if (!flagMail) erroArr.push("mail");
    if (!flagTopic) erroArr.push("topic");
    if (!flagMessage) erroArr.push("message");
    return erroArr;
  }
};

class Contact extends Component {
  state = {
    name: "",
    mail: "",
    topic: "",
    message: ""
  };

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeMail = e => {
    this.setState({
      mail: e.target.value
    });
  };

  handleChangeTopic = e => {
    this.setState({
      topic: e.target.value
    });
  };

  handleChangeMessage = e => {
    this.setState({
      message: e.target.value
    });
  };

  handleClickForm = e => {
    e.preventDefault();
    const error = formValidation(
      this.state.name,
      this.state.mail,
      this.state.topic,
      this.state.message
    );
    if (error === "clear") {
      alert("bombastiko");
    } else {
      alert("ogarnij sie...");
    }
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
