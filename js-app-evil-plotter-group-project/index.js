


$(document).ready(function() {

 if (!!sessionStorage.user_id) {
  const boardsController = new BoardsController()
  boardsController.show()
  
  //this is now handled by the click event attached the boards
  // const notesController = new NotesController()
  // notesController.show()
 } else {
   new AuthenticationController()
 }




})
