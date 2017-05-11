class BoardView{
  renderBoards(boards) {
    var inner_html = ''
    boards.forEach( function(board){
      inner_html += `<div class="col s5">
      <span class="board blue-text text-darken-2" id = "board-${board.id}" >${board.title}</span>
    </div><a href="#" class="delete-board col s1" id="delete-board-${board.id}">delete</a>`

    })
    console.log(inner_html)
    return `<div class='row'>
      ${inner_html}

    </div>
    `
  }
  renderNewForm(){
    return `<form id="board-form">
            <input type="text-field" id="new-board-content"></input>
            <input type="submit" id="save-board">
            </form>`
  }

  BoardName(title) {
    return `<h1>${title}</h1>`
  }

}
