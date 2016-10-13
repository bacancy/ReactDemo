var React = require('react');
var FluxIntroActions = require('../actions/FluxDataActions');
var CodeMirror = require('react-codemirror');
var EditorComponent = require('./code_editor.js');
// Flux Code view
var FluxCode = React.createClass({
  render: function () {
    return (
      <div className="code border">
          <h1 className="center border-bottom">Code</h1>
          <div className="code_text cm-s-inner">
            <EditorComponent inputdataAll={this.props.inputdataCode} selectedStep={this.props.selectedCode} />
          </div>
      </div>
    );
  }
});
module.exports = FluxCode;
