class Note {
  constructor(id, title, content, top, left, height, width) {
    this.id = id
    this.title = title
    this.content = content
    this.top = top
    this.left = left
    this.height = height
    this.width = width
  }

  static all() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/4/notes/`
    })
  }

  static newNote() {
    
  }

  static create() {

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

  static post(user_id, board_id) {
    return $.ajax ({
      url: `http://localhost:3000/api/v1/users/${user_id}/boards/${board_id}/notes/`,
      // url: `http://localhost:3000/api/v1/users/1/boards/4/notes/`,
      type: 'POST'
    })
  }
}

// + note should have a save button

// + update a note (position and text) using save button
