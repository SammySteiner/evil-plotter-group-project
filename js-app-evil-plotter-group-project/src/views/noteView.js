class NoteView {
  render(note) {
    return `<div class="row">
          <div class="postIt" style="position: relative; left: ${note.left}px; top: ${note.top}px">
          <div class="topBar" id="title-${note.id}">
            <h6 class="center-align vertical-align">${note.title.toUpperCase()}</h6></div>
          <div class="form z-depth-5">
            <div contenteditable class=textAria id="content-${note.id}">${note.content}</div>
          </div>
        </div>
      </div>`
  }
}
