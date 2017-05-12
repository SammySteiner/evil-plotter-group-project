class NotesController {
  constructor() {
    $('a#newNote').on('click.newNote', function(){
      const noteView = new NoteView
      const html = noteView.noteForm()
      Board.all.forEach(function(board) {
        const board_id = $('.board-id').html()
        const user_id = sessionStorage.user_id
        if (board.id === board_id) {
          board.addNote("", "Title", "Content", '0', '0', '200px', '200px', board_id, user_id )
          // (id, title, content, left, top, height, width, board_id, user_id)
          Note.create(board.notes.slice(-1))
            $('div#noteContainer').html(noteView.renderArrNotes(board.notes))
            BoardsController.show(user_id, board_id)
        }

      })

    })

    // $('a#save').on('click.save', () => this.save())
  }

  create() {
  }

  delete() {}

  update(){

  }
}
