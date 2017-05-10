class NotesController {

  show(){
    const view = new NoteView()

    Note.all().then((data) => {
      data.forEach((note) => {
        $('div#noteContainer').append(view.render(note))
        $(function(){
          $("div#postIt").draggable({
            handle: '.topBar',
          })
        })
      })
    })
  }

  create() {}
}
