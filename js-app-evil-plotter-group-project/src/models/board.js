class Board {

  constructor() {
    this.notes = []
    Board.all.push(this) // push instance of self into array of board objects
  }

  showNotes(){
    console.log(this.notes)
  }

  addNote(title, content, left, top, height, width) {
    this.notes.push(new Note(title, content, left, top, height, width))
  }
}

Board.all = []

  static all(){
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/`
    })
  }
}
