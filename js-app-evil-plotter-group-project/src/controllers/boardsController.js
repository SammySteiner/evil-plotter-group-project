class BoardsController{

  constructor(){
    $('body').on('click.showBoard', '.board', function(e){
      const user_id = sessionStorage.user_id
      const board_id = this.id.replace(/\D/g,'')
      const board_title = $(this)[0].textContent

      $.ajax ({
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/${board_id}/notes`
      }).then(function(data){
        const html = `<h1>${board_title}</h1>`
        $("#boardContainer").html(html)
        BoardsController.show(user_id, board_id)
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

    $('body').on('click.viewBoards', '#viewBoards', function() {
      const view = new BoardView()
      Board.allBoards().then((boards) => {
        $("#boardContainer").html(view.renderBoards(boards))
      })
    })

    $('body').on('submit.submitBoard', '#board-form', function(e){
      e.preventDefault()
      const title = $("#new-board-content").val()
      const user_id = sessionStorage.user_id

      $.ajax({
        method: "POST",
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/`,
        data: { board: {title: title, user_id: user_id}}
      }).then( function(data){
        const title = data.title
        const html = `<h1>${title}</h1>`

        $("#boardContainer").html(html)
        $("#noteContainer").html('')

        const boardsController = new BoardsController()
        boardsController.show()
      })
    })
  }

  index(){
    const view = new BoardView()
    Board.allBoards().then((boards) => {
      $("#boardContainer").html(view.renderBoards(boards))
    })
  }

  static show(user_id, board_id){
    const view = new NoteView()
    Board.showNotes(user_id, board_id).then((data) => {
      const new_board = new Board(board_id)
      data.forEach((note) => {
        new_board.addNote(note.id, note.title, note.content, note.left, note.top, new_board.id, user_id) // note.height, note.width
        // rendering note
        $('div#noteContainer').append(view.render(note))
        $('a#save').on('click', () => this.save(new_board))
        // make topBar draggable
        $("div.postIt").draggable({ handle: '.topBar' })
        // mouse up after drag -> update
        $('div.topBar').on ('mouseup', function(event) {
          const id = $('div.topBar')[0].id.replace(/\D/g,'')
          const title = event.target.outerText
          const content = $.trim(event.target.parentElement.parentElement.lastElementChild.textContent)
          const top = $(this).offset().top
          const left = $(this).offset().left
          const height = "200px"
          const width = "200px"
          Note.update(id, title, content, top, left, height, width)
          console.log(`updated object title: id: ${id}, ${title}, content: ${content}, top: ${top}px, left:${left}px, height: ${height}, width: ${width}`)
        })
      })
    })
  }

  static newBoard(){
    const view = new BoardView()
    $("#boardContainer").append(view.renderNewForm())
  }

  update(){
    Board.update()
    //grab id of clicked board and render the content as a writeable area
  }

  save(board){
    board.notes.forEach(function(note) {
      Note.put(note)
    })
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
