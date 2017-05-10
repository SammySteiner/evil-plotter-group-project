class Note {

  static all() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/4/notes/`
    })
    console.log("Note Model: all() ajax get complete")
  }

  static post() {}
}

// constructor(title, content, top, left) {
//   this.view = new NoteView()
//   this.title = title
//   this.content = content
//   this.top = top
//   this.left = left
//   this.show()
//   console.log("NotesController: constructed")
// }
