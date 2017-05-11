class BoardsController{



  constructor(){
    console.log("Boards Controller instantiated")
    $('body').on('click', '.board', function(e){
      const user_id = sessionStorage.user_id
      const board_id = this.id.replace(/\D/g,'')
      const board_title = $(this)[0].textContent
      $.ajax ({ // stubbed out generate card from ajax request to API site
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/${board_id}/notes`
      }).then(function(data){
        const html = `<h1>${board_title}</h1>`
        $("#boardContainer").html(html)
        const notesController = new NotesController()
        notesController.show()

      })
    })
    $('body').on('click.deleteBoard', '.delete-board', function(e){
      const user_id = sessionStorage.user_id
      const board_id = this.id.replace(/\D/g,'')
      BoardsController.deleteBoard(user_id, board_id)
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
        const title = data.title
        const html = `<h1>${title}</h1>`
        $("#boardContainer").html(html)
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


    static deleteBoard(user_id, board_id){
       $.ajax({
        type: 'DELETE',
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/${board_id}`
      }).then(function(){
        const view = new BoardView()
        Board.allBoards().then((boards) => {
            $("#boardContainer").html(view.renderBoards(boards))
        })
      })

      //add an x box and on click destroy the board with corresponding id
    }


}
