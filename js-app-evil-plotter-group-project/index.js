


$(document).ready(function() {

 if (!!sessionStorage.user_id) {
  const boardsController = new BoardsController()
  boardsController.show()
  AuthenticationController.logout()
 } else {
   new AuthenticationController()
   AuthenticationController.logout()
 }




})
