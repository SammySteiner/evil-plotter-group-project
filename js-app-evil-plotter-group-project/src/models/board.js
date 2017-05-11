class Board {
  constructor() {
    this.notes = []
    Board.all.push(this) // push instance of self into array of board objects
  }

  addNote(title, content, left, top, height, width) {
    this.notes.push(new Note(title, content, left, top, height, width))
  }
}

Board.all = []
