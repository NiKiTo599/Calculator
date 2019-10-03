import React from "react";
import { Parser } from "expr-eval";

import "./App.css";
import Calculator from "./components/Calculator";
import Inputs from "./components/Inputs";

export default class App extends React.Component {
  constructor() {
    super();
    this.parser = new Parser();
  }
  state = {
    valueForFirstField: "0",
    valueForSecondField: ""
  };

  changeValueForFirstField = value => {
    if (value === "ac") {
      this.setState({
        valueForFirstField: "0",
        valueForSecondField: ""
      });
      return;
    }
    if (value === "=") {
      this.setState({
        valueForFirstField: `${this.parser.evaluate(this.state.valueForSecondField)}`,
        valueForSecondField: `${this.state.valueForSecondField}=${this.parser.evaluate(this.state.valueForSecondField)}`
      });
      return;
    }
    const equal = this.state.valueForSecondField.indexOf('=');
    if (equal !== -1) {
      this.setState({
        valueForSecondField: `${this.state.valueForFirstField}`
      })
    }
    if (!isNaN(+value) || value === ".") {
      console.log(this.state.valueForFirstField,isNaN(+this.state.valueForFirstField))
      if (isNaN(+this.state.valueForFirstField)) {
        console.log(1)
        this.setState({
          valueForFirstField: value,
          valueForSecondField: this.state.valueForSecondField + value
        });
      } else if (this.state.valueForSecondField.legth <= this.state.valueForFirstField.legth) {
        console.log(2)
        this.setState({
          valueForFirstField: this.state.valueForFirstField + value,
          valueForSecondField: this.state.valueForFirstField + value
        });
      } else {
        this.setState({
          valueForFirstField: this.state.valueForFirstField + value,
          valueForSecondField: this.state.valueForSecondField + value
        });
      }
    } else if (equal === -1) {
      this.setState({
        valueForFirstField: value,
        valueForSecondField: this.state.valueForSecondField + value
      });
    } else {
      this.setState({
        valueForSecondField: this.state.valueForFirstField + value,
        valueForFirstField: value
      })
    }
  };

  render() {
    return (
      <>
        <main>
          <div className="calculator-container">
            <Inputs
              one={this.state.valueForFirstField}
              two={this.state.valueForSecondField}
            />
            <Calculator
              changeOne={this.changeValueForFirstField}
              changeTwo={this.changeValueForSecondField}
            />
          </div>
        </main>

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </>
    );
  }
}
