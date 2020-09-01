import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  myChangeHandler = (event) => {
    console.log("myChangeHandler");
    this.setState({ username: event.target.value });
    const data = { username: event.target.value };
    console.log(JSON.stringify(data));

    fetch("http://127.0.0.1:8000/api/data/", {
      method: "POST", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => console.log("Response:", response))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById("root"));
