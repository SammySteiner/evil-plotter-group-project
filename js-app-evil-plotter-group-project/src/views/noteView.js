class NoteView {
  render(note) {

    let i = 0
    return `
        <div class="row">
          <div id="postIt" class="resizeable">
          <div class=topBar >
            <h5 class="center-align vertical-align">${note.title.toUpperCase()}</h5></div>
          <div class=form>
            <div contenteditable class=textAria id="note">${note.content}</div>
          </div>
        </div>
      </div>
    `
  }
}
