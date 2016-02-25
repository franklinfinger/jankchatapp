var templates {
  enterChat: [
    '<div class="enter-msg-container">',
      '<div class="enter-msg-wrapper">',
        '<input type="text" value="<%= message %>" class="enter-msg" placeholder="enter message">',
        '</p>',
      '</div>',
    '</div>',
  '</div>'
].join("");

postChat: [
  '<div class="post-msg-container">',
    // <!-- add date of message? day and time -->
    '<h3><%= username %></h3>',
    '<div class="post-msg-wrapper">',
      '<p class="post-msg">',
        '<%= postedMessage %></p>',
    '</div>',
  '</div>'
].join("");

} // end of templates
