var React = require('react');
var Render = require('react-dom').render;
var InputData = require('./InputData');
var DataAPI = require('./utils/DataAPI');
var FluxDataApp = require('./components/FluxDataApp.react.js');

InputData.init();

DataAPI.getInputData();
Render(
  <FluxDataApp />,
  document.getElementById('flux-stack')
);
