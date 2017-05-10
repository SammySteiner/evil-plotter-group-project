$(document).ready(function() {

 if (!!sessionStorage.user_id) {
   const controller = new NotesController()
   controller.show()
 } else {
   new AuthenticationController()
 }

})
