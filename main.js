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
    myChat.addAllChats();
  },

  // initEvents
  initEvents: function() {

  // CRUD events
  getChats: function() {
    return chats;
  },
  addChats: function(newChat) {
    chats.push(newChat);
  },
  deleteChats: function(idx)
    chats.splice(idx, 1);
  },

} // end of myChat
