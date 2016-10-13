var React = require('react');
var FluxIntroActions = require('../actions/FluxDataActions');

// Flux Assembly view
var FluxAssembly = React.createClass({
  // Render View
  render: function () {
    var selected = this.props.selectedAssembly.id;
    var Text = this.props.inputdataAssembly.steps.map(function(obj) {
      if(selected >= obj.id) {
        var assembly_data = obj.assembly.map(function(e_obj) {
          return ([
                <div className={obj.assembly_class} key={obj.id}>{e_obj.assemblyId}</div>
            ]);
          });
          return (
                <div >{assembly_data}</div>
          );
      }
    });
    return (
      <div className="assembly border">
          <h1 className="center border-bottom">Assembly</h1>
          <div className="assembly_text cm-s-inner">
            {Text}
          </div>
      </div>
    );
  }

});

module.exports = FluxAssembly;
