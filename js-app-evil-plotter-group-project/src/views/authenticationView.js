class AuthenticationView {
  static renderAuth() {
    return `<div class="row">
      <div class="col s6" id="signup-form">
        <h3>Sign up</h3>
        <form>
          <div class="input-field">
            <input id="signup-name" type="text" class="validate">
            <label for="first_name">Name</label>
          </div>
          <div class="input-field">
            <input id="signup-password" type="password" class="validate">
            <label for="password">Password</label>
          </div>
          <div class="input-field">
            <input id="signup-password_confirmation" type="password" class="validate">
            <label for="password">Password Confirmation</label>
          </div>
          <div class="input-field">
            <input id="submit" type="submit" class="waves-effect waves-light btn red" value="Sign Up">
          </div>
        </form>
      </div>
      <div class="col s6" id="login-form">
        <form>
          <h3>Log In</h3>
            <div class="input-field">
              <input id="login-name" type="text" class="validate">
              <label for="first_name">Name</label>
            </div>
            <div class="input-field">
              <input id="login-password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
            <div class="input-field">
              <input id="submit" type="submit" class="waves-effect waves-light btn red" value="Log In">
            </div>
        </form>
      </div>
    </div>`
  }
}
