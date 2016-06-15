var Dispatcher = require('../dispatcher/Dispatcher');

module.exports = {

  keyPressed: function(note) {
    Dispatcher.dispatch({
      actionType: "KEYPRESSED",
      noteName: note
    });
  },

  keyReleased: function(note) {
    Dispatcher.dispatch({
      actionType: "KEYRELEASED",
      noteName: note
    });
  },

  updateAllNotes:function(keys){
    Dispatcher.dispatch({
      actionType: "UPDATEALLNOTES",
      allNotes: keys
    });
  }

};
