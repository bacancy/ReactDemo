var React = require('react');
var IntoStore = require('../stores/IntroStore');
var FluxIntro = require('./FluxIntro.react.js');
var FluxCode = require('./FluxCode.react.js');
var FluxAssembly = require('./FluxAssembly.react.js');
var FluxStack = require('./FluxStack.react.js');

function getInputState() {
  return {
    inputdata: IntoStore.getData(),
    selectedIndex: IntoStore.getSelected()
  };
}

var FluxDataApp = React.createClass({

  getInitialState: function () {
    return getInputState();
  },

  componentDidMount: function () {
    IntoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    IntoStore.removeChangeListener(this._onChange);
  },

  render: function () {

    return (
      <div className="app border">
        <header className="primary-header"></header>
        <aside className="primary-aside border-right pad-5">
          <FluxIntro inputdata={this.state.inputdata} selected={this.state.selectedIndex}/>
        </aside>
        <main key='main'>
          <div key="home" className="home-page">
            <FluxCode  inputdataCode={this.state.inputdata} selectedCode={this.state.selectedIndex}/>
            <FluxAssembly inputdataAssembly={this.state.inputdata} selectedAssembly={this.state.selectedIndex}/>
            <FluxStack inputdataStack={this.state.inputdata} selectedStack={this.state.selectedIndex}/>
          </div>
        </main>
      </div>
    );
  },
  _onChange: function () {
    this.setState(getInputState());
  }
});

module.exports = FluxDataApp;
