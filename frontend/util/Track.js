var KeyActions = require('../actions/KeyActions');

var Track = function(attrs) {
  this.name = attrs.name;
  this.roll = attrs.roll || [];
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.currentTime = new Date().getTime();
};

Track.prototype.addNotes = function (notesArr) {
  var timeSlice = new Date().getTime() - this.currentTime;

  this.roll.push({ timeSlice: timeSlice, notes: notesArr });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);

};

Track.prototype.play = function () {
  if (this.interval) return true;
  var playBackTime = 0;
  var currentNote=0;

  this.interval = setInterval(function () {
    playBackTime += 10;
    if(currentNote < this.roll.length){
      if(this.roll[currentNote].timeSlice < playBackTime){
        KeyActions.updateAllNotes(this.roll[currentNote].notes);
        currentNote ++;
      }
    }
    else{
      clearInterval(this.interval);
      this.interval = null;
    }
  }.bind(this), 10);
};

module.exports = Track;
