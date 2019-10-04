import React from "react";


export default class Calculator extends React.Component {

  makeEvents (e) {
    this.props.changeOne(e.target.childNodes[0].data);
  }

  render() {
    return (
      <section className="section">
        <div className="row">
          <table onClick={this.makeEvents.bind(this)}>
            <tr>
              <td id="clear" className="quadrate quadrate-wide red" colSpan="2">
                AC
              </td>
              <td id="divide" className="quadrate">/</td>
              <td id="multiply" className="quadrate">*</td>
            </tr>
            <tr>
              <td id="seven" value="7" className="quadrate">7</td>
              <td id="eight" className="quadrate">8</td>
              <td id="nine" className="quadrate">9</td>
              <td id="add" className="quadrate">+</td>
            </tr>
            <tr>
              <td id="four" className="quadrate">4</td>
              <td id="five" className="quadrate">5</td>
              <td id="six" className="quadrate">6</td>
              <td id="subtract" className="quadrate">-</td>
            </tr>
            <tr>
              <td id="one" className="quadrate">1</td>
              <td id="two" className="quadrate">2</td>
              <td id="three" className="quadrate">3</td>
              <td id="equals" rowSpan="2" className="quadrate quadrate-tall blue">
                =
              </td>
            </tr>
            <tr>
              <td id="zero" className="quadrate quadrate-wide" colSpan="2">
                0
              </td>
              <td id="decimal" className="quadrate">.</td>
            </tr>
          </table>
        </div>
      </section>
    );
  }
}
