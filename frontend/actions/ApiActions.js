var Dispatcher = require("../dispatcher/dispatcher.js");

module.exports = {
  importTracks: function (tracks) {
    console.log("track impo dispatch");
    Dispatcher.dispatch({
      actionType: "TRACKSIMPORT",
      tracks: tracks
    });
  }
};
