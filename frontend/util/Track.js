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

module.exports = Track;
