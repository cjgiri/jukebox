var KeyActions = require('../actions/KeyActions');


  var mapping =  {
    65: 'A5',
    87: 'ASharp5',
    83: 'B5',
    68: 'C6',
    82: 'CSharp6',
    70: 'D6',
    84: 'DSharp6',
    71: 'E6',
    72: 'F6',
    85: 'FSharp6',
    74: 'G6',
    73: 'GSharp6',
    75: 'A6'
  };

$(document).keydown(function(event){
    KeyActions.keyPressed( mapping[event.keyCode]);
  });

$(document).keyup(function(){
  KeyActions.keyReleased( mapping[event.keyCode]);
});
