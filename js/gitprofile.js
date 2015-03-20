$(document).ready(function() {

  $('.formclass').on('submit', function(e) {

    var url = "https://api.github.com/users/" + $("input").val();
    e.preventDefault();

    $.get(url, function(data) {
      var image = data.avatar_url
      $('.divclass').html("<img src=" + image + "/>");
      $('.divclass').append("<p>Followers: " + data.following + "</p>");
      $( '.divclass' ).append("Repos: " + data.public_repos );
    });

  });

});

// Code from learning materials (for reference while building)

// $(document).ready(function() {

//   $('.gitprofile').on('submit', function(e) {

//     e.preventDefault();

    // var url = 'https://api.github.com/users/' + $('input.username').val();

//     var template = $('template').html();

//     $.get(url, function(info) {
//       $('.container').prepend(Mustache.render(template, info));
//     }).fail(function() {
//       $('.container').prepend("User not found")
//     }).always(function() {
//       $('input.username').val('');
//       });
//   });
// });