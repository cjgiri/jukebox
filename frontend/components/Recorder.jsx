var React = require('react');
var Track = require('../util/Track');
var KeyStore = require('../stores/KeyStore');

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

  render: function () {
    return (
      <div>
        <button onClick={ this.startRecording }>start</button>
        <button onClick={ this.stopRecording }>stop</button>
      </div>
    );
  }
});

module.exports = Recorder;
