import React from 'react'

export default class Inputs extends React.Component {
  render() {
    console.log(this.props, typeof(this.props.one[0]))
    return (
      <>
        <div id="first-input">{this.props.two[0] === '0' && this.props.two[1] !== '.' ? this.props.two.slice(1) : this.props.two}</div>
        <div className="inputs" id="display">{this.props.one[0] === '0' && this.props.one.length !== 1 && this.props.one[1] !== '.' ? this.props.one.slice(1) : this.props.one}</div>
        </>
    );
  }
}