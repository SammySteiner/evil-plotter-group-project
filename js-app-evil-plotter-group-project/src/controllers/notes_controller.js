class Note {
  constructor(title, content, top, left) {
    this.view = new NoteView()
    this.title = title
    this.content = content
    this.top = top
    this.left = left
    this.show()
  }

  show (){
    getAllBoardNotes().then((data) => {
      data.forEach((note) => {
        this.view.render(this.note)
        $(function(){
          $("div.postIt").draggable({handle: '.topBar'})
        })
      })
    })
  }
  
  create () {}
}

// .css({top: self.top, left: self.left, position:'absolute'})

  //   // change DB to top and left
  //   // find out x and y range
  //   // add positions to seed file
  // })
