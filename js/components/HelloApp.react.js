var React = require('react');
var HelloStore = require('../stores/HelloStore');
var HelloActions = require('../actions/HelloActions');

var HelloApp = React.createClass({
  getInitialState: function() {
    return {
      currentCount: HelloStore.getCurrentCount()
    };
  },

  componentDidMount: function() {
    HelloStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    HelloStore.removeChangeListener(this._onChange);
  },
  
  render: function() {
    return (
      <div className="inner cover">
        <h1 className="cover-heading">Hello Flux!</h1>
        <p className="lead">
          Just a simple counter! Please greet me
        </p>
        <p className="lead">
          You said︰<em>{this.state.currentCount}</em> times 
        </p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-default" onClick={this._onClick}>Hi!</a>
        </p>
      </div>
    );
  },
  
  _onClick: function() {
    HelloActions.hello();
  },

  _onChange: function() {
    this.setState({
      currentCount: HelloStore.getCurrentCount()
    });
  }
});

module.exports = HelloApp;
