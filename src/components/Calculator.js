import React from "react";


export default class Calculator extends React.Component {

  makeEvents (e) {
    this.props.changeOne(e.target.id);
  }

  render() {
    return (
      <section className="section">
        <div className="row">
          <table onClick={this.makeEvents.bind(this)}>
            <tr>
              <td id="ac" className="quadrate quadrate-wide red" colSpan="2">
                AC
              </td>
              <td id="/" className="quadrate">/</td>
              <td id="*" className="quadrate">*</td>
            </tr>
            <tr>
              <td id="7" className="quadrate">7</td>
              <td id="8" className="quadrate">8</td>
              <td id="9" className="quadrate">9</td>
              <td id="+" className="quadrate">+</td>
            </tr>
            <tr>
              <td id="4" className="quadrate">4</td>
              <td id="5" className="quadrate">5</td>
              <td id="6" className="quadrate">6</td>
              <td id="-" className="quadrate">-</td>
            </tr>
            <tr>
              <td id="1" className="quadrate">1</td>
              <td id="2" className="quadrate">2</td>
              <td id="3" className="quadrate">3</td>
              <td id="=" rowSpan="2" className="quadrate quadrate-tall blue">
                =
              </td>
            </tr>
            <tr>
              <td id="0" className="quadrate quadrate-wide" colSpan="2">
                0
              </td>
              <td id="." className="quadrate">.</td>
            </tr>
          </table>
        </div>
      </section>
    );
  }
}
