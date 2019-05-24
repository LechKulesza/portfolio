import React, { Component } from "react";
import "../style/reset.sass";
import "../style/App.sass";
import Loading from "../components/Loading";

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
      </>
    );
  }
}

export default App;
