var React = require('react'),
    Track = require('../util/Track'),
    KeyStore = require('../stores/KeyStore'),
    TrackStore = require('../stores/TrackStore'),
    TrackActions = require('../actions/TrackActions');

Recorder = React.createClass({
  getInitialState: function () {
    return { isRecording: false, track: new Track ({name: "test"}) };
  },

  startRecording: function () {
    this.setState({isRecording: true});
    this.state.track.startRecording();
    this.storeListener = KeyStore.addListener(this.updateRoll);
  },
  updateRoll: function(){
    console.log(this.state.track.roll);
    this.state.track.addNotes(KeyStore.all());
  },

  stopRecording: function(){
    this.setState({isRecording: false});
    this.state.track.stopRecording();
    this.storeListener.remove();
    console.log(this.state.track.roll);
  },

  playRecording: function () {
    this.state.track.play();
  },

  saveTrack: function () {
    TrackActions.addTrack(this.state.track);
    TrackStore.allTracks();

  },

  render: function () {
    return (
      <div>
        <button onClick={ this.startRecording }>start</button>
        <button onClick={ this.stopRecording }>stop</button>
        <button onClick={ this.playRecording }>play back</button>
        <button onClick={ this.saveTrack }>save</button>
      </div>
    );
  }
});

module.exports = Recorder;
