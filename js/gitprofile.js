$(document).ready(function() {

  $('.formclass').on('submit', function() {

    console.log("test button");

  });

});

// Code from learning materials (for reference while building)

// $(document).ready(function() {

//   $('.gitprofile').on('submit', function(e) {

//     e.preventDefault();

//     var url = 'https://api.github.com/users/' + $('input.username').val();

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