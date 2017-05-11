


$(document).ready(function() {

 if (!!sessionStorage.user_id) {
   const controller = new BoardsController()
   controller.show()
   AuthenticationController.logout()
 } else {
   new AuthenticationController()
   AuthenticationController.logout()
 }




})
