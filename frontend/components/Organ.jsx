var React = require('react'),
    OrganKey = require('./OrganKey'),
    Tones = require('../constants/Tones');

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
      </div>
    );
  }
});

module.exports = Organ;
