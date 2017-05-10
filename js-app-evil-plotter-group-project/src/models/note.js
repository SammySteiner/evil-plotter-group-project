class Note {
  constructor(title, content, top, left, height, width) {
    this.title = title
    this.content = content
    this.top = top
    this.left = left
    this.height = height
    this.width = width
  }

  getOneNote() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/1/notes/1`
    }).then(function(note) {
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
    })
  }

  static getAllBoardNotes() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/4/notes/`
    }).then(function(notes) {
      notes.forEach(function(note, i) {
        $('div#noteContainer').append(
          `<div class="row">
              <div class="postIt" id="${i}" >
              <div class=topBar >
                <h5 class="center-align vertical-align">${note.title.toUpperCase()}</h5></div>
                <div class=form>
                  <div contenteditable class=textAria id="note">${note.content}</div>
                </div>
              </div>
            </div>
          </div>`
        )
      })
      $(function(){
        $("div.postIt").draggable({
          handle: '.topBar',
        })
      })
    })
  }

  createNewNote() {}

}

// .css({top: self.top, left: self.left, position:'absolute'})

  //   // change DB to top and left
  //   // find out x and y range
  //   // add positions to seed file
  // })
