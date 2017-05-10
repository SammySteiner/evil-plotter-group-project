class NoteView {
  render(note) {
    $('div#noteContainer').append(`
      <div class="row">
          <div id="postIt">
          <div class=topBar >
            <h5 class="center-align vertical-align">${note[0].title.toUpperCase()}</h5></div>
          <div class=form>
            <div contenteditable class=textAria id="note">${note[0].content}</div>
          </div>
        </div>
      </div>
    `)
  }
}
