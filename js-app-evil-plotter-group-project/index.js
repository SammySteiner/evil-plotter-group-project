$(function() {

  // $.ajax ({ // stubbed out generate card from ajax request to API site
  //   url: `http://localhost:3000/api/v1/users/1/boards/1/notes/1`
  // }).then(function(note) {
  //   $('div#noteContainer').append(`
  //     <div class="row">
  //         <div id="postIt">
  //         <div class=topBar >
  //           <h5 class="center-align vertical-align">${note[0].title.toUpperCase()}</h5></div>
  //         <div class=form>
  //           <div contenteditable class=textAria id="note">${note[0].content}</div>
  //         </div>
  //       </div>
  //     </div>
  //   `)


  $.ajax ({ // stubbed out generate card from ajax request to API site
    url: `http://localhost:3000/api/v1/users/1/boards/1/notes/`
  }).then(function(notes) {
    notes.forEach(function(note) {
      $('div#noteContainer').append(
        `<div class="row">
            <div id="postIt">
            <div class=topBar >
              <h5 class="center-align vertical-align">${note.title.toUpperCase()}</h5></div>
            <div class=form>
              <div contenteditable class=textAria id="note">${note.content}</div>
            </div>
          </div>
        </div>`
      ).done(function(note) {
        $("#mydiv").css({top: note.y, left: note.x, position:'absolute'})
        // change DB to top and left
        // find out x and y range
        // add positions to seed file
      })

      $(function(){
        $("#postIt").draggable({
          handle: '.topBar',
        })
      })

    })
  })
})

style="position: relative; left: 290px; top: 119px;"
