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
    message: "",
    errors: []
  };

  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
    document.querySelector(".contact .name").classList.remove("err");
  };

  handleChangeMail = e => {
    this.setState({
      mail: e.target.value
    });
    document.querySelector(".contact .mail").classList.remove("err");
  };

  handleChangeTopic = e => {
    this.setState({
      topic: e.target.value
    });
    document.querySelector(".contact .topic").classList.remove("err");
  };

  handleChangeMessage = e => {
    this.setState({
      message: e.target.value
    });
    document.querySelector(".contact .message").classList.remove("err");
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
      this.setState({
        name: "",
        mail: "",
        topic: "",
        message: "",
        errors: []
      });
      alert("Wysłano");
    } else {
      const errMessage = [];

      for (let i = 0; i < error.length; i++) {
        if (error[i] === "name")
          errMessage.push("Podaj swoje imię oraz nazwisko!");
        if (error[i] === "mail") errMessage.push("Podaj prawidłowy mail!");
        if (error[i] === "topic") errMessage.push("Napisz jakiś temat!");
        if (error[i] === "message")
          errMessage.push("Im więcej napiszesz tym lepiej!");
      }
      this.setState({
        errors: errMessage
      });
      for (let i = 0; i < error.length; i++) {
        document.querySelector(".contact ." + error[i]).classList.add("err");
      }
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
              className="message"
              cols="30"
              rows="10"
              placeholder="Wiadomość"
            />
            <button onClick={this.handleClickForm}>Wyślij</button>
          </form>
          <span className="errorMessage">
            {this.state.errors.length === 0
              ? null
              : this.state.errors.join("\n")}
          </span>
        </section>
      </section>
    );
  }
}

export default Contact;
