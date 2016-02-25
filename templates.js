var templates {
  enterChat: [
<<<<<<< HEAD
        '<p class="enter-msg">',
          '<%= message %>',
=======
    '<div class="enter-msg-container">',
      '<div class="enter-msg-wrapper">',
        '<input type="text" value="<%= message %>" class="enter-msg" placeholder="enter message">',
>>>>>>> 4de86f42459a725f4f63e634d1668a39b30cca41
        '</p>',
      '</div>',
].join("");

postChat: [
    // <!-- add date of message? day and time -->
    '<h3><%= username %></h3>',
    '<div class="post-msg-wrapper">',
      '<p class="post-msg">',
        '<%= postedMessage %></p>',
    '</div>',
].join("");

} // end of templates
