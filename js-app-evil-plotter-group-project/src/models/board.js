class Board {

  constructor(board_id) {
    this.id = board_id
    this.notes = []
    Board.all.push(this) // push instance of self into array of board objects
  }

  static showNotes(user_id, board_id){
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/${user_id}/boards/${board_id}/notes/`
    })
  }

  addNote(id, title, content, left, top, height, width, board_id, user_id){
    this.notes.push(new Note(id, title, content, left, top, height, width, board_id, user_id))
  }

  static allBoards(){
    const user_id = sessionStorage.user_id
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/${user_id}/boards/`
    })
  }
}

Board.all = []  // keep an eye on this...
