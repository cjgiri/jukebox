var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/Dispatcher');

var _tracks = [];

var TrackStore = new Store(Dispatcher);

TrackStore.allTracks = function () {
  return _tracks.slice();
};

TrackStore.__onDispatch = function (payload) {
  switch (payload.actionType){
    case "ADDTRACK":
      _tracks.push(payload.track);
      TrackStore.__emitChange();
      break;
  }

};
module.exports = TrackStore;
