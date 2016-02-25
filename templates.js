var templates {
  enterChat: [
        '<p class="enter-msg">',
          '<%= message %>',
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
