var Tones = require('../constants/Tones'),
    Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher');

_notes = [];

var KeyStore = new Store(Dispatcher);

KeyStore.find = function (note){
  return _notes.indexOf(note);
};

KeyStore.all = function (){
  return _notes.slice();
};

KeyStore.__onDispatch = function(payload) {
  switch (payload.actionType){
    case "KEYPRESSED":
    if (KeyStore.find(payload.noteName) === -1) {
      _notes.push(payload.noteName);
      KeyStore.__emitChange();
    }
      console.log("key pressed" + payload.noteName);
      break;
    case "KEYRELEASED":
      _notes.splice(KeyStore.find(payload.noteName), 1);
      KeyStore.__emitChange();
      break;
  }
};

module.exports = KeyStore;
