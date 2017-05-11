class BoardView{
  renderBoards(boards) {
    var inner_html = ''
    boards.forEach( function(board){
      inner_html += `<div class="col s6">
      <span class="board blue-text text-darken-2" id = "board-${board.id}" >${board.title}</span>
    </div>`

    })
    console.log(inner_html)
    return `<div class='row'>
      ${inner_html}

    </div>
    `
  }
  renderNewForm(){
    return `<input type="text-field" id="new-board-content"></input>
            <input type="submit" id="save-board">`
  }
  renderEventListeners(){
    return `$( "#board-65" ).click(function() {
      alert( "Handler for .click() called." );
    })`
  }

}
