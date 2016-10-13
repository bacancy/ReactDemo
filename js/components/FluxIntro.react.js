var React = require('react');
var FluxIntroActions = require('../actions/FluxDataActions');

// Flux Intro view
var FluxIntro = React.createClass({

  // Select steps via Actions
  nextStep: function (event) {
    var index = parseInt(event.target.value) + 1;
    FluxIntroActions.setIntro(index);
  },
  backStep: function (event) {
    var index = parseInt(event.target.value) - 1;
    FluxIntroActions.setIntro(index);
  },
  // Render View
  render: function () {
    var cur = this.props.selected.id;
    var total = parseInt(this.props.inputdata.steps.length) - 1;
    return (

      <div className="home-page .pad-lr">
        <h1 >{this.props.inputdata.title}</h1>
        <h3 >{this.props.selected.title}</h3>
        <div className="intotext">
          <div dangerouslySetInnerHTML={{__html: this.props.selected.description}}></div>
        </div>
          <div className='steps center'>
            <button className='back' type="button" onClick={this.backStep} value={cur} disabled={cur > 0 ? '' : 'disabled'}>
              {cur > 0 ? 'Back' : 'Back'}
            </button>
            <button  className='next' type="button" value={cur} onClick={this.nextStep} disabled={cur < total ? '' : 'disabled'}>
              {cur == 0 ? 'Start' : 'Next'}
            </button>
          </div>
      </div>

    );
  }
});

module.exports = FluxIntro;
