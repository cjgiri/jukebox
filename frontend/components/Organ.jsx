var React = require('react'),
    OrganKey = require('./OrganKey'),
    Tones = require('../constants/Tones'),
    Recorder = require('./Recorder');

var Organ = React.createClass({
  render: function () {
    toneKeys = Object.keys(Tones);
    return(
      <div>
        {
          toneKeys.map(function(noteKey, ind){
            return <OrganKey key={ind} noteName={noteKey}/>;
          })
        }
        <Recorder/>
      </div>
    );
  }
});

module.exports = Organ;
