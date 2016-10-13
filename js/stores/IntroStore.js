var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxDataConstants = require('../constants/FluxDataConstants');
var _ = require('underscore');

// Define initial data points
var _data = {}, _selected = null;

// Method to load product data from mock API
function loadInputData(data) {
  _data = data[0];
  _selected = data[0].steps[0];
}

// Method to set the currently selected product variation
function setSelected(index) {
  _selected = _data.steps[index];

}
// Extend IntroStore with EventEmitter to add eventing capabilities
var IntroStore = _.extend({}, EventEmitter.prototype, {
  // Return data
  getData: function () {
    return _data;
  },
  // Return selected
  getSelected: function () {
    return _selected;
  },
  // Emit Change event
  emitChange: function () {
    this.emit('change');
  },
  // Add change listener
  addChangeListener: function (callback) {
    this.on('change', callback);
  },
  // Remove change listener
  removeChangeListener: function (callback) {
    this.removeListener('change', callback);
  }
});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
  var action = payload.action;
  var text;
  switch (action.actionType) {
    // Respond to RECEIVE_DATA action

    case FluxDataConstants.RECEIVE_DATA:
      loadInputData(action.data);
      break;
    case FluxDataConstants.SET_INTRO:
        setSelected(action.index);
      break;
    default:
      return true;
  }
  // If action was responded to, emit change event
  IntroStore.emitChange();
  return true;
});

module.exports = IntroStore;
