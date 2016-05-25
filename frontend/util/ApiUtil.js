var ApiActions = require("../actions/apiActions.js");

module.exports = {
  fetchTracks: function(){
    $.ajax({
      method: "GET",
      url: "/tracks",
      dataType: "json",
      success: function (response) {
        console.log(response);
        ApiActions.importTracks(response);
      }
    });
  },

};
