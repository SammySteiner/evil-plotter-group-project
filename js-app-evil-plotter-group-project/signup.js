function loggedIn() {
  return (!!sessionStorage.user_id)
}

function signup() {
  $('#signup').html(AuthenticationView.renderSignup())
}

function login() {
  $('#login').html(AuthenticationView.renderLogin())
}
