import React, { Component } from "react";

class Hello extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount dipanggil");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate dipanggil");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount dipanggil");
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, React!",
      showHello: true,
    };

    console.log("constructor dipanggil dan komponen sudah siap");


  }

  changeMessage = () => {
    this.setState({
      message: "Hello, Devran",
      });
  };

  showHideHello = () => {
    this.setState({
      showHello: !this.state.showHello,
    });
  };

  render() {
    return (
      <div>
        {this.state.showHello && <Hello message={this.state.message} />}
        <button onClick={this.changeMessage}>Change Messsage</button>
        <button onClick={this.showHideHello} style={{ marginLeft: "10px" }}>
          Show Hello
        </button>
      </div>
    );
  }
}

export default App;
