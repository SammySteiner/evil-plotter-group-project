$(function() {
  $.ajax({
    url: 'http://localhost:3000/api/v1/boards'
  }).then(function(board) {
    $('').text(note)
  })

  $.post({
    url: 'http://localhost:3000/api/v1/users'
  }).then(function(user) {
    
  })

})
