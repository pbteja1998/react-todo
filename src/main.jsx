var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');

ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="ToDo" />, document.getElementById('todo'));
ReactDOM.render(<ListManager title="Christmas" headingColor="#b31217" />, document.getElementById('christmas'));
ReactDOM.render(<ListManager title="Diwali" headingColor="#b31217" />, document.getElementById('diwali'));
ReactDOM.render(<ListManager title="Ramzan" headingColor="#b31217" />, document.getElementById('ramzan'));
