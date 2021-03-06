class BoardsController{

  constructor(){
    $('body').on('click.showBoard', '.board', function(e){
      const user_id = sessionStorage.user_id
      const board_id = this.id.replace(/\D/g,'')
      const board_title = $(this)[0].textContent

      $.ajax ({
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/${board_id}/notes`
      }).then(function(data){
        const html = `<h1>${board_title}</h1><p hidden class="board-id">${board_id}</p>`
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
      $('#noteContainer').html('')

      $('a#save').unbind('click.save')
      $('div.topBar').on ('mouseup.setNote' )

      Board.allBoards().then((boards) => {
        $("#boardContainer").html(view.renderBoards(boards))
      })
    })

    $('body').on('submit.submitBoard', '#board-form', function(e){
      e.preventDefault()
      $('a#save').unbind('click.save')
      $('div.topBar').on ('mouseup.setNote' )

      const title = $("#new-board-content").val()
      const user_id = sessionStorage.user_id

      $.ajax({
        method: "POST",
        url: `http://localhost:3000/api/v1/users/${user_id}/boards/`,
        data: { board: {title: title, user_id: user_id}}
      }).then( function(data){
        const title = data.title
        const html = `<h1>${title}</h1>`
        const board_id = data.id
        $("#boardContainer").html(html)
        $("#noteContainer").html('')
        BoardsController.show(user_id, board_id)
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
    const noteController = new NotesController()
    const view = new NoteView()
    Board.showNotes(user_id, board_id).then((data) => {
      const new_board = new Board(board_id)
      $('a#save').on('click.save', () => {this.save(new_board)})
      data.forEach((note) => {
        note.height = '200px'
        note.width = '200px'
        new_board.addNote(note.id, note.title, note.content, note.top, note.left, note.height, note.width, note.board_id, sessionStorage.user_id) //
        // rendering note
        $('div#noteContainer').append(view.render(note))
        $("div.postIt").draggable({ handle: '.topBar' })
        // mouse up after drag -> update
        $('div.topBar').on ('mouseup.setNote', function(event) {
          Board.all.forEach(function(noteObject){
            if (parseInt($('div.topBar')[0].id.replace(/\D/g,''), 10) === noteObject.id) {
              noteObject.id = $('div.topBar')[0].id.replace(/\D/g,'')
              noteObject.title = event.target.outerText
              noteObject.content = event.target.parentElement.parentElement.lastElementChild.lastElementChild.innerText
              noteObject.top = $(event.target).offset().top
              noteObject.left = $(event.target).offset().left
              noteObject.height = "200px"
              noteObject.width = "200px"
            }
          })
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

  static save(board){
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
