(window.webpackJsonpcalculator=window.webpackJsonpcalculator||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),s=a(7),i=a.n(s),n=(a(14),a(1)),o=a(2),c=a(4),d=a(3),F=a(5),u=a(8),m=(a(15),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(o.a)(t,[{key:"makeEvents",value:function(e){this.props.changeOne(e.target.childNodes[0].data)}},{key:"render",value:function(){return r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"row"},r.a.createElement("table",{onClick:this.makeEvents.bind(this)},r.a.createElement("tr",null,r.a.createElement("td",{id:"clear",className:"quadrate quadrate-wide red",colSpan:"2"},"AC"),r.a.createElement("td",{id:"divide",className:"quadrate"},"/"),r.a.createElement("td",{id:"multiply",className:"quadrate"},"*")),r.a.createElement("tr",null,r.a.createElement("td",{id:"seven",value:"7",className:"quadrate"},"7"),r.a.createElement("td",{id:"eight",className:"quadrate"},"8"),r.a.createElement("td",{id:"nine",className:"quadrate"},"9"),r.a.createElement("td",{id:"add",className:"quadrate"},"+")),r.a.createElement("tr",null,r.a.createElement("td",{id:"four",className:"quadrate"},"4"),r.a.createElement("td",{id:"five",className:"quadrate"},"5"),r.a.createElement("td",{id:"six",className:"quadrate"},"6"),r.a.createElement("td",{id:"subtract",className:"quadrate"},"-")),r.a.createElement("tr",null,r.a.createElement("td",{id:"one",className:"quadrate"},"1"),r.a.createElement("td",{id:"two",className:"quadrate"},"2"),r.a.createElement("td",{id:"three",className:"quadrate"},"3"),r.a.createElement("td",{id:"equals",rowSpan:"2",className:"quadrate quadrate-tall blue"},"=")),r.a.createElement("tr",null,r.a.createElement("td",{id:"zero",className:"quadrate quadrate-wide",colSpan:"2"},"0"),r.a.createElement("td",{id:"decimal",className:"quadrate"},".")))))}}]),t}(r.a.Component)),v=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return console.log(this.props,typeof this.props.one[0]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"first-input"},"0"===this.props.two[0]&&"."!==this.props.two[1]?this.props.two.slice(1):this.props.two),r.a.createElement("div",{className:"inputs",id:"display"},"0"===this.props.one[0]&&1!==this.props.one.length&&"."!==this.props.one[1]?this.props.one.slice(1):this.props.one))}}]),t}(r.a.Component),h=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(d.a)(t).call(this))).state={valueForFirstField:"0",valueForSecondField:"0"},e.changeValueForFirstField=function(t){if(("."!==e.state.valueForFirstField[e.state.valueForFirstField.length-1]||"."!==t)&&("0"!==e.state.valueForFirstField[0]||"0"!==t)&&(console.log(t,typeof t,"="===t),!(e.state.valueForFirstField.length>=17)||isNaN(+t)||"."===t))if("AC"!==t)if("="!==t)if(isNaN(+t)&&"."!==t&&isNaN(+e.state.valueForSecondField[e.state.valueForSecondField.length-1])&&"."!==e.state.valueForSecondField[e.state.valueForSecondField.length-1]){var a=e.state.valueForSecondField[e.state.valueForSecondField.length-1];e.setState({valueForFirstField:t,valueForSecondField:e.state.valueForSecondField.replace(a,t)})}else{var l=e.state.valueForSecondField.indexOf("=");-1===l?isNaN(+t)&&"."!==t?-1===l?e.setState({valueForFirstField:t,valueForSecondField:e.state.valueForSecondField+t}):e.setState({valueForSecondField:e.state.valueForFirstField+t,valueForFirstField:t}):(console.log(e.state.valueForFirstField,isNaN(+e.state.valueForFirstField)),isNaN(+e.state.valueForFirstField)?(console.log(1),e.setState({valueForFirstField:t,valueForSecondField:e.state.valueForSecondField+t})):e.state.valueForSecondField.legth<=e.state.valueForFirstField.legth?(console.log(2),e.setState({valueForFirstField:e.state.valueForFirstField+t,valueForSecondField:e.state.valueForFirstField+t})):e.setState({valueForFirstField:e.state.valueForFirstField+t,valueForSecondField:e.state.valueForSecondField+t})):e.setState({valueForSecondField:e.state.valueForFirstField+t,valueForFirstField:e.state.valueForFirstField+t})}else e.setState({valueForFirstField:"".concat(e.parser.evaluate(e.state.valueForSecondField)),valueForSecondField:"".concat(e.state.valueForSecondField,"=").concat(e.parser.evaluate(e.state.valueForSecondField))});else e.setState({valueForFirstField:"0",valueForSecondField:""})},e.parser=new u.a,e}return Object(F.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("div",{className:"calculator-container"},r.a.createElement(v,{one:this.state.valueForFirstField,two:this.state.valueForSecondField}),r.a.createElement(m,{changeOne:this.changeValueForFirstField,changeTwo:this.changeValueForSecondField}))),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b655e30.chunk.js.map