var Dispatcher = require('./dispatcher/Dispatcher'),
    Note = require('./util/Note'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    KeyListener = require('./util/KeyListener'),
    OrganKey = require('./components/OrganKey'),
    Organ = require('./components/Organ');
    ApiUtil = require('./util/ApiUtil');

document.addEventListener("DOMContentLoaded", function () {
  var root = $('#content')[0];
  ReactDOM.render(<Organ/>, root);
});
