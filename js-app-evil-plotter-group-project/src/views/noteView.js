class NoteView {
  render(note) {
    console.log(`5. render note ${note}`)
    let i = 0
    return `<div class="row">
          <div id="postIt">
          <div class=topBar >
            <h5 class="center-align vertical-align">${note.title.toUpperCase()}</h5></div>
          <div class=form>
            <div contenteditable class=textAria id="note">${note.content}</div>
          </div>
        </div>
      </div>
    `
    console.log("NotesController: Rendered note")
  }
}
