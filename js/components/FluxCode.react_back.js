var React = require('react');
var FluxIntroActions = require('../actions/FluxDataActions');
var CodeMirror = require('react-codemirror');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
// Flux Code view
var FluxCode = React.createClass({
    render: function () {
        var options = {
          lineNumbers: true,
          readOnly: true,
          cursorHeight:0
        };

        return (
          <div className="code border">
              <h1 className="center border-bottom">Code</h1>
              <div className="code_text cm-s-inner">
                <CodeMirror value={this.props.selected.code} options={options} />
              </div>
          </div>
        );
    }
});
module.exports = FluxCode;
