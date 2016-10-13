var React = require('react');
var FluxIntroActions = require('../actions/FluxDataActions');
var Editor = require('react-codemirror');
var IntoStore = require('../stores/IntroStore');
require('codemirror/mode/clike/clike');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');
require('codemirror/addon/edit/closetag');
require('codemirror/addon/selection/active-line');

var EditorComponent = React.createClass({
  
  getInitialState: function () {
     return {code:this.props.inputdataAll.code};
   },
   componentDidMount: function () {
     IntoStore.addChangeListener(this.handleChange);
   },
   componentDidUpdate: function() {
     IntoStore.addChangeListener(this.handleChange);
   },
   handleChange(){
     var remove = this.props.selectedStep;
     var assemblyData = remove.assembly;
     if(assemblyData.length > 0) {
       for (var i = 0; i < assemblyData.length; i++) {
         lineno = assemblyData[i].lineNo;
         if(assemblyData.length == 1) {
           this.refs.editor.getCodeMirror().doc.removeLineClass(lineno, "", remove.assembly_class+"-top-btm");
         } else {
           if(i == 0 ){
             this.refs.editor.getCodeMirror().doc.removeLineClass(lineno, "", remove.assembly_class+"-top");
           } else if ( i == assemblyData.length - 1){
             this.refs.editor.getCodeMirror().doc.removeLineClass(lineno, "", remove.assembly_class+"-btm");
           }
         }
       }
     }
     var selected = IntoStore.getSelected();
     var assemblyData = selected.assembly;
       if(assemblyData.length > 0) {
         for (var i = 0; i < assemblyData.length; i++) {
            lineno = assemblyData[i].lineNo;
            if(assemblyData.length == 1) {
              this.refs.editor.getCodeMirror().doc.addLineClass(lineno, "", selected.assembly_class+"-top-btm");
            } else {
              if(i == 0 ){
                this.refs.editor.getCodeMirror().doc.addLineClass(lineno, "", selected.assembly_class+"-top");
              } else if ( i == assemblyData.length - 1){
                this.refs.editor.getCodeMirror().doc.addLineClass(lineno, "", selected.assembly_class+"-btm");
              }
            }
         }
       }
   },
    render: function () {

      var options = {
        lineNumbers: true,
        readOnly: true,
        cursorHeight:0
      };
      return (
          <Editor
            ref="editor"
            value={this.state.code}
            options={options}
          />
      );
    }
})
module.exports = EditorComponent;
