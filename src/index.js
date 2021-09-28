import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Key(props) {
  return (
    <button className="key" value={props.value} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Display(props) {
  return (
    <div className="display">
      {props.value}
    </div> 
  );
}

class Keyboard extends React.Component {
  renderDisplay() {
    return (
      <Display
        value={this.props.currentValue}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="row">
          <Display value={this.props.currentValue} />
        </div>
        <div className="row">
          <Key value="(" onClick={this.props.onClick} />
          <Key value=")" onClick={this.props.onClick} />
          <Key value="%" onClick={this.props.onClick} />
          <Key value="AC" onClick={this.props.onClick} />
        </div>
        <div className="row">
          <Key value="7" onClick={this.props.onClick} />
          <Key value="8" onClick={this.props.onClick} />
          <Key value="9" onClick={this.props.onClick} />
          <Key value="&divide;" onClick={this.props.onClick} />
        </div>
        <div className="row">
          <Key value="4" onClick={this.props.onClick} />
          <Key value="5" onClick={this.props.onClick} />
          <Key value="6" onClick={this.props.onClick} />
          <Key value="x" onClick={this.props.onClick} />  
        </div>
        <div className="row">
          <Key value="1" onClick={this.props.onClick} />
          <Key value="2" onClick={this.props.onClick} />
          <Key value="3" onClick={this.props.onClick} />
          <Key value="-" onClick={this.props.onClick} />
        </div>
        <div className="row">
          <Key value="0" onClick={this.props.onClick} />
          <Key value="." onClick={this.props.onClick} />
          <Key value="=" onClick={this.props.onClick} />
          <Key value="+" onClick={this.props.onClick} />
        </div>
      </div>

    )
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentValue:  "",
    }
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    const value = e.target.value;
    const current = this.state.currentValue;
    switch(value) {
      case "AC":
        this.setState({currentValue: ""});
        break;
      case "=":
        const evaluation = eval(this.state.currentValue);
        this.setState({currentValue: evaluation});
        break
      case "&divide;":
        this.setState({currentValue: this.state.currentValue + "/"});
        break
      case "x":
        this.setState({currentValue: current + "*"});
        break
      default:
        this.setState({currentValue: this.state.currentValue + value});
        break;

    }
  }

  render() {
    const currentValue = this.state.currentValue;

    return (
      <Keyboard
        currentValue={currentValue}
        onClick={this.handleClick}
      />
    )
  }
}



ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
