import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (<div><Welcome name="zrz" />
    <AgeView age="12" /></div>);
}

function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>
}

class AgeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { age: props.age }
  }

  render() {
    return <h2 onClick={(e) => this.handleClick(e)}>Age is {this.state.age}</h2>
  }

  handleClick() {
    this.setState({ age: Number(this.state.age) + 1 })
  }
}

export default App;
