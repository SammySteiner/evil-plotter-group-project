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
    })
  }

  static getAllBoardNotes() {
    return $.ajax ({ // stubbed out generate card from ajax request to API site
      url: `http://localhost:3000/api/v1/users/1/boards/4/notes/`
    })
  }


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
