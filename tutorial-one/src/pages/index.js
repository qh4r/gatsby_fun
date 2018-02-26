import React from "react";
import Link from "gatsby-link";
import {Container} from "../components/container/container.component.js";

export default class extends React.Component {

  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  // componentDidMount() {
  //   this.timer = setInterval(this.increment, 1500);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  render() {
    return (<Container>
        <h1>TEST</h1>
        <button onClick={this.increment} type="button">+1</button>
        <p>{this.state.counter}</p>
        <Link to="/about">About</Link>
      </Container>);
  }
}
