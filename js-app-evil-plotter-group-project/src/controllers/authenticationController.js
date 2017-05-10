class AuthenticationController {
  constructor() {
    this.signup()
    this.login()
    $('body').on('submit', '#signup-form' ,function(e){
      e.preventDefault()
      Authentication.signup().then(function(data) {
        sessionStorage.setItem("user_id", `${data.user_id}`)
        $('#signup').html('')
        $('#login').html('')
       //  add board data to a div on the html page with an id of boards.
      })
    })
    $('body').on('submit', '#login-form' ,function(e){
      e.preventDefault()
      Authentication.login().then(function(data) {
      sessionStorage.setItem("user_id", `${data.user_id}`)
     $('#login').html('')
     $('#signup').html('')
     //  add board data to a div on the html page with an id of boards.
    })
  })
  }


  signup() {
    $('#signup').html(AuthenticationView.renderSignup())
  }

  login() {
    $('#login').html(AuthenticationView.renderLogin())
  }

}