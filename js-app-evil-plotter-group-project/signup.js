function loggedIn() {
  return (!!sessionStorage.user_id)
}

function signup() {
  $('#signup').html(`<h3>Sign up</h3>
  <div class="row">
  <form class="col s12" id="signup-form">
    <div class="row">
      <div class="input-field col s12">
        <input id="signup-name" type="text" class="validate">
        <label for="first_name">Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="signup-password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="signup-password_confirmation" type="password" class="validate">
        <label for="password">Password Confirmation</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="submit" type="submit" class="waves-effect waves-light btn red" value="Sign Up">
      </div>
    </div>
  </form>
</div>`)
}

function login() {
  $('#login').html(`<h3>Log In</h3>
  <div class="row">
  <form class="col s12" id="login-form">
    <div class="row">
      <div class="input-field col s12">
        <input id="login-name" type="text" class="validate">
        <label for="first_name">Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="login-password" type="password" class="validate">
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="submit" type="submit" class="waves-effect waves-light btn red" value="Sign In">
      </div>
    </div>
  </form>
  </div>`)
}
