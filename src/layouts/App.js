import React, { Component } from "react";
import "../style/reset.sass";
import "../style/App.sass";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import Baner from "./Baner";
import Info from "./Info";

const isTopInViewport = function(elem) {
  const bounding = elem.getBoundingClientRect();
  if (
    bounding.top >= 0 &&
    bounding.top <=
      (window.innerHeight * 0.75 ||
        document.documentElement.clientHeight * 0.75)
  ) {
    elem.classList.add("visible");
  } else {
    elem.classList.remove("visible");
  }
};

class App extends Component {
  state = {
    loadingAnim: "active",
    loading: true,
    showNavTitle: false
  };

  componentDidMount() {
    this.setState({
      loadingAnim: "disactive"
    });

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 2000);

    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.35) {
      this.setState({
        showNavTitle: true
      });
    } else {
      this.setState({
        showNavTitle: false
      });
    }

    isTopInViewport(document.querySelector(".info p"));
    isTopInViewport(document.querySelector(".info h1"));
    isTopInViewport(document.querySelector(".info img"));
  };

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading
            classNamed={this.state.loadingAnim}
            classNamedSection={this.state.loading}
          />
        ) : null}
        <Navigation showNavTitle={this.state.showNavTitle} />
        <Baner showNavTitle={this.state.showNavTitle} go={this.state.loading} />
        <Info />
      </>
    );
  }
}

export default App;
