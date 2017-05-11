class NotesController {

  show(){
    const view = new NoteView()
    console.log("1. notes show")
    Note.all().then((data) => {
      console.log("2.", data)
      data.forEach((note) => {
        $('div#noteContainer').append(view.render(note))
        $("div.postIt").draggable({
          handle: '.topBar'
        })

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

  create() {
    $('a#newNote').on('click', function(){
      // add to new board object
      // const board =  Board.all.find()
      Note.all().then(function(data) {
        data.forEach(function(note) {
          board.addNote('', 'type your note here', '293px', '480px', '', '')
        })
      })
      $('div#noteContainer').html(board.notes)
    })
  }

  delete() {

  }

  update(){
    $('a#save').on('click', function() {
      const notes = $('div#noteContainer')[0]
      Note.post().then((data) => {

      })
    })
  }
}
