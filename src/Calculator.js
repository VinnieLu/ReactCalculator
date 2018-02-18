import React, { Component } from 'react';
import "./Calculator.css";

const styles = {
	screen: {
		border: "1px solid black",
		textAlign: "center",
		height: "200px",
		width: "1000px",
		fontSize: "175px",
    margin: "0 auto",
    borderRadius: "25px",
    background: "linear-gradient(red, yellow)"
	},
	button: {
		border: "1px solid black",
		textAlign: "center",
		height: "100px",
		width: "225px",
    margin: "20px 10px 0 10px",
		float: "left",
		fontSize: "100px",
    borderRadius: "25px",
    background: "linear-gradient(blue, purple)"
	},
  equals: {
    border: "1px solid black",
    textAlign: "center",
    height: "100px",
    width: "225px",
    margin: "20px 10px 0 10px",
    float: "left",
    fontSize: "100px",
    borderRadius: "25px",
    background: "linear-gradient(red, orange)"
  },
  calculator: {
    // border: "1px solid black",
    minHeight: "100px",
    minWidth: "100 px",
    margin: "0 auto"
  },
  rows: {
    width: "1000px",
    margin: "0 auto"
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props)
	    this.state = {
	  	  amount: 0,
	  	  calculated: false
	  }
	  this.populate = this.populate.bind(this)
	  this.calculate = this.calculate.bind(this)
  }
  populate(event) {
  	if (this.state.amount === 0 || this.state.calculated === true ) {
      if (this.state.calculated === true && (event.currentTarget.textContent === "+" || event.currentTarget.textContent === "-" || event.currentTarget.textContent === "*" || event.currentTarget.textContent === "/")) {
          this.setState({ calculated: false })
          this.setState({ amount: this.state.amount + event.currentTarget.textContent })
      }
      else {
        this.setState({ calculated: false })
        this.setState({ amount: event.currentTarget.textContent })
      }
  	}
  	else {
  		this.setState({ amount: this.state.amount + event.currentTarget.textContent })
  	}
  }
  calculate() {
  	var screen = this.refs.screen.innerText
  	var calculated = eval(screen)
  	this.setState({ amount: calculated })
  	this.setState({ calculated: true })
  }
  render() {
    return (
        <div style={styles.calculator}>
        	<div ref="screen" style={styles.screen}>{this.state.amount}</div>
          <div style={styles.rows}>
            <div onClick={this.populate} style={styles.button}>7</div>
            <div onClick={this.populate} style={styles.button}>8</div>
            <div onClick={this.populate} style={styles.button}>9</div>
            <div onClick={this.populate} style={styles.button}>/</div>
          </div>
          <div style={styles.rows}>
            <div onClick={this.populate} style={styles.button}>4</div>
            <div onClick={this.populate} style={styles.button}>5</div>
            <div onClick={this.populate} style={styles.button}>6</div>
            <div onClick={this.populate} style={styles.button}>*</div>
          </div>
          <div style={styles.rows}>
            <div onClick={this.populate} style={styles.button}>1</div>
            <div onClick={this.populate} style={styles.button}>2</div>
            <div onClick={this.populate} style={styles.button}>3</div>
            <div onClick={this.populate} style={styles.button}>-</div>
          </div>
          <div style={styles.rows}>
          	<div onClick={this.populate} style={styles.button}>0</div>
            <div onClick={this.populate} style={styles.button}>.</div>
          	<div onClick={this.populate} style={styles.button}>+</div>
          	<div onClick={this.calculate} style={styles.equals}>=</div>
          </div>
        </div>
    )
  }
}

export default Calculator