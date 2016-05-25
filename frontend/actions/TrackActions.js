var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  addTrack: function(track) {
    Dispatcher.dispatch({
      actionType: "ADDTRACK",
      track: track
    });
  }
};
