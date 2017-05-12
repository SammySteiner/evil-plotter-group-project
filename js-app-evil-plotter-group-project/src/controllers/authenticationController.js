class AuthenticationController {
  constructor() {

    this.auth()
    $('body').on('submit', '#signup-form' ,function(e){
      e.preventDefault()
      Authentication.signup().then(function(data) {
        sessionStorage.setItem("user_id", `${data.user_id}`)
        $('#auth').html('')
        const boardController = new BoardsController()
        boardController.index()
       //  add board data to a div on the html page with an id of boards.
      })
    })
    $('body').on('submit', '#login-form' ,function(e){
      e.preventDefault()
      Authentication.login().then(function(data) {
      sessionStorage.setItem("user_id", `${data.user_id}`)
     $('#auth').html('')
     const boardController = new BoardsController()
     boardController.index()
     //  add board data to a div on the html page with an id of boards.
    })
  })
  }


  auth() {
    $('#auth').html(AuthenticationView.renderAuth())
  }

  static logout() {
    $('body').on('click', '#logout', function(e){
      e.preventDefault()
      sessionStorage.setItem("user_id", '')
      // remove board controller????? remove event listeners???
      $('body').unbind( "click.newBoard" )
      new AuthenticationController()
      $('#noteContainer').html('')
      $('#boardContainer').html('')
    })
  }

}
