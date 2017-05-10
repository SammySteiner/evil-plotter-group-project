class Authentication {

  static signup() {
    const name = $('#signup-name').val()
    const password = $('#signup-password').val()
    const password_confirmation = $('#signup-password_confirmation').val()
    return $.ajax({
      url: 'http://localhost:3000/api/v1/users',
      method: 'POST',
      data: { user:
        { name: name,
          password: password,
          password_confirmation: password_confirmation
        }
      }
    })
  }

  static login() {
    const name = $('#login-name').val()
    const password = $('#login-password').val()
    return $.ajax({
      url: 'http://localhost:3000/api/v1/sessions',
      method: 'POST',
      data: {user: {
        name: name,
        password: password,
      }}
    })
  }


}
