class Note {

  static all() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/4/notes/`
    })
  }

  static post() {}
}
