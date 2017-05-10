$(function() {
  // $.ajax({
  //   url: 'http://localhost:3000/api/v1/boards'
  // }).then(function(board) {
  //   $('').text(note)
  // })

  $.ajax({
    url: 'http://localhost:3000/api/v1/users/1/boards',
    method: 'get'
  }).then(function(user) {
    console.log(user)
  })

})
