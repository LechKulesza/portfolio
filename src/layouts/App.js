import React, { Component } from "react";
import "../style/reset.sass";
import "../style/App.sass";
import Loading from "../components/Loading";
import Navigation from "../components/Navigation";
import Baner from "./Baner";

class App extends Component {
  state = {
    loadingAnim: "active",
    loading: true
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
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading
            classNamed={this.state.loadingAnim}
            classNamedSection={this.state.loading}
          />
        ) : null}
        <Navigation />
        <Baner go={this.state.loading} />
      </>
    );
  }
}

export default App;
