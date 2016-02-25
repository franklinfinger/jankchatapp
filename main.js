$(document).ready(function() {
  myChat.init();
});

// myChat main Object calling initStyling & initEvents
var myChat = {
  init: function() {
    myChat.initStyling();
    myChat.initEvents();
  },


  // initStyling
  initStyling: function() {
    myChat.addAllPosts();
  }, // end of initStyling

  // initEvents
  initEvents: function() {

  getChats: function() {
    return chats;
  },
  addChats: function(newChat) {

  }
  } // end of initEvents

} // end of myChat
