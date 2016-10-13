var React = require('react');
var FluxIntroActions = require('../actions/FluxDataActions');

// Flux Stack view
var FluxStack = React.createClass({
  // Render View
  render: function () {
    var stack = this.props.inputdataStack.stacks;
    var selected = this.props.selectedStack.id;
    var inputdata = this.props.inputdataStack.steps;
    var Text = stack.map(function(obj) {
      var Stack_val = inputdata.map(function(e) {
        if(selected >= e.id ) {
            var temp = e.stack.map(function(object) {
              if(object.code == obj) {
                var box_m = e.assembly_class +' box_m';
                return (
                  <div className='stack-box' key={object.code} >
                    <div>[{object.title}]</div>
                    <div className={box_m}>{object.value}</div>
                    <div className='box_b'>{object.code}</div>
                  </div>
                );
              }
            });
            return(
              <div>{temp}</div>
            );
        }
      });
      return(
        <div>{Stack_val}</div>
      );
    });

    return (
      <div className="stack border">
          <h1 className="center border-bottom">Stack</h1>
          <div className="stack_text cm-s-inner">
            {Text}
          </div>
      </div>
    );
  }

});

module.exports = FluxStack;
