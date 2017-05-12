class NotesController {
  constructor() {
    $('a#newNote').on('click.newNote', function(){
      const noteView = new NoteView
      const html = noteView.noteForm()
      const board = Board.all.forEach(function(board) {
        const board_id = $('.board-id').html()
        const user_id = sessionStorage.user_id
        if (board.id === board_id) {
          board.addNote("", "Title", "Content", '0', '0', '200px', '200px', board_id, user_id )
          // (id, title, content, left, top, height, width, board_id, user_id)
        }
      })





      // add to new board object
      // const board =  Board.all.find()

      // Note.all(board_id).then(function(data) {
      //   data.forEach(function(note) {
      //     Board.addNote('default title', 'type your note here', '0px', '0px', '200px', '200px')
      //   })
      // })
      $('div#noteContainer').html(board.notes)
    })

    $('a#save').on('click.save', () => this.save(new_board))
  }

  create() {
  }

  delete() {}

  update(){

  }
}
