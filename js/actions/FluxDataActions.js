var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxDataConstants = require('../constants/FluxDataConstants');

// Define action methods
var FluxDataActions = {

  // Receive inital Input data
  receiveInput: function (data) {
    AppDispatcher.handleAction({
      actionType: FluxDataConstants.RECEIVE_DATA,
      data: data
    })
  },

  // Set Intro
  setIntro: function (index) {
    AppDispatcher.handleAction({
      actionType: FluxDataConstants.SET_INTRO,
      index: index
    })
  },

  // Set currently selected Step
  selectStep: function (index,update) {
    AppDispatcher.handleAction({
      actionType: FluxDataConstants.SELECT_STEP,
      index: index,
      update: update
    })
  },

};

module.exports = FluxDataActions;
