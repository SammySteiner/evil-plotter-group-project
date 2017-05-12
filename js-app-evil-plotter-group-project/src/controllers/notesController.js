class NotesController {

  create() {
    $('a#newNote').on('click.newNote', function(){
      // add to new board object
      // const board =  Board.all.find()
      Note.all().then(function(data) {
        data.forEach(function(note) {
          board.addNote('default title', 'type your note here', '293px', '480px', '200px', '200px')
        })
      })
      $('div#noteContainer').html(board.notes)
    })
  }

  delete() {}

  update(){
    $('a#save').on('click', function() {
      const notes = $('div#noteContainer')[0]
      Note.post().then((data) => {
        console.log(data)
      })
    })
  }
}
