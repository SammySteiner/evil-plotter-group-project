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
  }

  static all() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/${sessionStorage.user_id}/boards/4/notes/`
    })
  }

  static newNote() {}

  static create() {}

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
      url: `http://localhost:3000/api/v1/users/${sessionStorage.user_id}/boards/${note.board_id}/notes/${note.id}`
    })
  }
}
