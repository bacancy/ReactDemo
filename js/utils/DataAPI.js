var FluxDataActions = require('../actions/FluxDataActions');

module.exports = {
  getInputData: function () {
    var data = JSON.parse(localStorage.getItem('intro'));
    FluxDataActions.receiveInput(data);
  }
};
