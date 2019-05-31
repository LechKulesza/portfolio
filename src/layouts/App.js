import React, { Component } from "react";
import "../style/reset.sass";
import "../style/App.sass";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import Baner from "./Baner";
import Info from "./Info";
import Contact from "./Contact";
import Footer from "./Footer";
import Arrow from "../components/Arrow";
import MobileNav from "../components/MobileNav";

const isTopInViewport = function(elem) {
  const bounding = elem.getBoundingClientRect();
  if (
    bounding.top <=
    (window.innerHeight * 0.95 || document.documentElement.clientHeight * 0.95)
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
    isTopInViewport(document.querySelector(".info .wrapImg"));
    isTopInViewport(document.querySelector(".wrapperContact .contact h1"));
    isTopInViewport(document.querySelector(".wrapperContact .contact h2"));
    isTopInViewport(
      document.querySelector(".wrapperContact .contact textarea")
    );
    isTopInViewport(document.querySelector(".wrapperContact .contact button"));
    isTopInViewport(document.querySelector(".wrapperContact .contact .name"));
    isTopInViewport(document.querySelector(".wrapperContact .contact .mail"));
    isTopInViewport(document.querySelector(".wrapperContact .contact .topic"));
  };

  handleShowIntoView = () => {
    setTimeout(() => {
      if (window.location.href.indexOf("main") !== -1) {
        document.querySelector(".baner").scrollIntoView();
      } else if (window.location.href.indexOf("info") !== -1) {
        document.querySelector(".info").scrollIntoView();
      } else if (window.location.href.indexOf("contact") !== -1) {
        document.querySelector(".contact").scrollIntoView();
      }
    }, 100);
  };

  handleGoUp = () => {
    window.scrollTo(0, 0);
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
        <MobileNav />
        <Navigation
          handleClick={this.handleShowIntoView}
          showNavTitle={this.state.showNavTitle}
        />
        <Baner
          handleClick={this.handleShowIntoView}
          showNavTitle={this.state.showNavTitle}
          go={this.state.loading}
        />
        <Info />
        <Contact />
        <Footer />
        <Arrow handleClick={this.handleGoUp} show={this.state.showNavTitle} />
      </>
    );
  }
}

export default App;
