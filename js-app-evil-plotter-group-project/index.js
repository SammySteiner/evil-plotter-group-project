$(document).ready(function() {

 if (!!sessionStorage.user_id) {
   const controller = new NotesController()
   controller.create()
   controller.show()
   AuthenticationController.logout()
 } else {
   new AuthenticationController()
   AuthenticationController.logout()
 }

})
