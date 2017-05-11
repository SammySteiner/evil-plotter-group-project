class BoardsController{



  constructor(){

    $('body').on('click', '.board', function(e){

      $.ajax ({ // stubbed out generate card from ajax request to API site
        url: `http://localhost:3000/api/v1/users/1/boards/1/notes`
      }).then(function(data){
        const notesController = new NotesController()
        notesController.show()

      })
    })
    $('body').on('click', '#newBoard', function(e){
      const boardsController = new BoardsController()
      boardsController.new()
    })
    $('body').on('click', '#save-board', function(e){
      e.preventDefault()
      //AJAX call to make new board
      alert($("#new-board-content").val())

    })
  }

  show(){
      const view = new BoardView()
      Board.all().then((boards) => {
          $("#boardContainer").append(view.renderBoards(boards))
      })

    }

    new(){
      const view = new BoardView()
      $("#boardContainer").append(view.renderNewForm())
    }



    update(){
      //grab id of clicked board and render the content as a writeable area
    }


    delete(){
      //add an x box and on click destroy the board with corresponding id
    }


}
