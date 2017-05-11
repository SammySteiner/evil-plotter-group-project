class BoardsController{



  constructor(){
    console.log("Boards Controller instantiated")
    $('body').on('click', '.board', function(e){
      const user_id = sessionStorage.user_id
      $.ajax ({ // stubbed out generate card from ajax request to API site
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/1/notes`
      }).then(function(data){
        const notesController = new NotesController()
        notesController.show()

      })
    })
    $('body').on('click.newBoard', '#newBoard', function(e){
      BoardsController.newBoard()
    })
    $('body').on('submit', '#board-form', function(e){
      e.preventDefault()
      const title = $("#new-board-content").val()
      const user_id = sessionStorage.user_id
      console.log('Hi')
      $.ajax({
        method: "POST",
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/`,
        data: { board: {
          title: title,
          user_id: user_id
        }
        }
      }).then( function(data){
        console.log(data)
        $("#boardContainer").html('')
        $("#noteContainer").html('')
        const notesController = new NotesController()
        notesController.show()

      })

    })
  }

  show(){
      const view = new BoardView()
      Board.allBoards().then((boards) => {
          $("#boardContainer").html(view.renderBoards(boards))
      })

    }

     static newBoard(){
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
