var React = require('react'),
    KeyStore = require('../stores/KeyStore'),
    Tones = require('../constants/Tones'),
    KeyActions = require('../actions/KeyActions'),
    Note = require('../util/Note');

var OrganKey = React.createClass({

  componentDidMount: function () {
    this.note = new Note(Tones[this.props.noteName]);
    this.storeListener = KeyStore.addListener(this.handleChange);
  },

  componentWillUnmount :function(){
    this.storeListener.remove();
  },

  handleChange: function(){
    if (KeyStore.find(this.props.noteName) === -1){
      this.note.stop();
    } else {
      this.note.start();
    }
  },

  render: function () {
    return <div>{ this.props.noteName }</div>;
  }
});

module.exports = OrganKey;
