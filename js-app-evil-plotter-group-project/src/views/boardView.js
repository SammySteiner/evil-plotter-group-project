class BoardView{
  renderBoards(boards) {
    var inner_html = ''
    boards.forEach( function(board){
      inner_html += `
        <div class="col s6"></div>
          <div class="col s6">
            <div class="col s6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="board card-title" id="board-${board.id}">${board.title}</span>
                  <p>Well, that's the trick, isn't it? And it's going to cost you something extra. Ten thousand in advance. Ten thousand?</p>
                </div>
                <div class="card-action">
                  <span class="board" id="board-${board.id}"><a>View</a></span>
                  <a href="#" class="delete-board" id="delete-board-${board.id}">Delete</a>
                </div>
              </div>
            </div>
          </div>

    <div class="col s3"></div>`
    })
    return `<div class='row'>${inner_html}</div>`
  }
  renderNewForm(){
    return `<form id="board-form">
              <input type="text-field" id="new-board-content"></input>
              <input type="submit" id="save-board">
            </form>`
  }

  BoardName(title) {
    return `<h1 class="center-align">${title}!!!</h1>`
  }

}

// <div class="col s5">
// <span class="board blue-text text-darken-2" id = "board-${board.id}" >${board.title}</span>
// </div><a href="#" class="delete-board col s1" id="delete-board-${board.id}">delete</a>
