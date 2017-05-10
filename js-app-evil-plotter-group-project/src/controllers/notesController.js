class NotesController {

  show(){
    const view = new NoteView()
    console.log("begin show")
    console.log(`1. Note.all(): ${Note.all()}`)
    Note.all().then((data) => {
      console.log(`2. data: ${data}`)
      data.forEach((note) => {
        console.log(`3. note: ${note}`)
        console.log(`4. render: ${view.render(note)}`)
        $('div#noteContainer').append(view.render(note))
        $(function(){
          $("div#postIt").draggable({
            handle: '.topBar',
          })
          console.log("NoteView: Set draggable event")
        })
        console.log("NotesController-show: Note Rendered")
      })
    })
  }

  create() {}
}
