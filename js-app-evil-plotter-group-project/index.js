$(document).ready(function() {
 if (loggedIn()) {

 } else {
   signup();
   login()
 }
 $('body').on('submit', '#signup-form' ,function(e){
   e.preventDefault()
   const name = $('#signup-name').val()
   const password = $('#signup-password').val()
   const password_confirmation = $('#signup-password_confirmation').val()
   $.ajax({
     url: 'http://localhost:3000/api/v1/users',
     method: 'POST',
     data: {user: {
       name: name,
       password: password,
       password_confirmation: password_confirmation
     }}
   }).then(function(data) {
     sessionStorage.setItem("user_id", `${data.user_id}`)
     $('#signup').html('')
     $('#login').html('')
    //  add board data to a div on the html page with an id of boards.
   })
 })

 $('body').on('submit', '#login-form' ,function(e){
   e.preventDefault()
   const name = $('#login-name').val()
   const password = $('#login-password').val()
   $.ajax({
     url: 'http://localhost:3000/api/v1/sessions',
     method: 'POST',
     data: {user: {
       name: name,
       password: password,
     }}
   }).then(function(data) {
     sessionStorage.setItem("user_id", `${data.user_id}`)
    $('#login').html('')
    $('#signup').html('')
    //  add board data to a div on the html page with an id of boards.
   })
 })

})
