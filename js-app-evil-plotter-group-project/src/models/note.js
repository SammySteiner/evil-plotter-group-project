class Note {
  constructor(id, title, content, top, left, height='200px', width='200px', board_id, user_id) {
    this.id = id
    this.title = title
    this.content = content
    this.top = top
    this.left = left
    this.height = height
    this.width = width
    this.board_id = board_id
    this.user_id = user_id
    Board.all.push(this)
  }

  static all(board_id) {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/${sessionStorage.user_id}/boards/${board_id}/notes/`
    })
  }

  static newNote() {}

  static create(noteArr) {
    const note = noteArr[0]
    const board_id = $('.board-id').html()
    const user_id = sessionStorage.user_id
      return $.ajax ({
        type: 'POST',
        url: `http://localhost:3000/api/v1/notes`,
        data: { note: {
          id: note.id, title: note.title, content: note.content, left: note.left, top: note.top, height: note.height, width: note.width, board_id: board_id, user_id: user_id
        }}
      })
    }


  static update(id, title, content, top, left, height, width) {
    this.id = id
    this.title = title
    this.content = content
    this.top = top
    this.left = left
    this.height = height
    this.width = width
  }

  static put(note) {
    return $.ajax ({
      type: 'PUT',
      url: `http://localhost:3000/api/v1/notes/${note.id}`,
      data: { note: {
        id: note.id, title: note.title, content: note.content, left: note.left, top: note.top, height: note.height, width: note.width
      }}
    })
  }
}
