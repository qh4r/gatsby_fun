import React from "react"

export default class extends React.Component {

  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  componentDidMount() {
    this.timer = setInterval(this.increment, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (<div>
        <h1>TEST</h1>
        <p>{this.state.counter}</p>
      </div>);
  }
}
