class AuthenticationController {
  constructor() {

    this.auth()
    $('body').on('submit.signup', '#signup-form' ,function(e){
      e.preventDefault()
      Authentication.signup().then(function(data) {
        sessionStorage.setItem("user_id", `${data.user_id}`)
        $('#auth').html('')
        $('body').unbind( "submit.signup" )
        const boardController = new BoardsController()
        boardController.index()
       //  add board data to a div on the html page with an id of boards.
      })
    })
    $('body').on('submit.login', '#login-form' ,function(e){
      e.preventDefault()
      Authentication.login().then(function(data) {
      sessionStorage.setItem("user_id", `${data.user_id}`)
     $('#auth').html('')
     $('body').unbind( "submit.login" )
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
      $('body').unbind( "click.newBoard" )
      $('body').unbind( "click.viewBoards" )
      $('body').unbind( "click.deleteBoard" )
      $('body').unbind( "submit.submitBoard" )
      $('body').unbind( "click.showBoard" )
      new AuthenticationController()
      $('#noteContainer').html('')
      $('#boardContainer').html('')
    })
  }

}
