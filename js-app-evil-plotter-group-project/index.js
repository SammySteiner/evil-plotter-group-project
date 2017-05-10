$(function() {

  $.ajax ({
    url: `http://localhost:3000/api/v1/users/1/boards/1/notes/1`
  }).then(function(note) {
    $('div#noteContainer').html(`
      <div class="row">
          <div id="postIt">
          <div class=topBar id="top"></div>
          <div class=form>
            <div contenteditable class=textAria id="note"></div>
          </div>
        </div>
      </div>
    `)
    $(function(){
      $("#postIt").draggable({
        handle: '.topBar',
      })
    })
    $('.topBar').html(`<h5 class="center-align vertical-align">${note[0].title.toUpperCase()}</h5>`)
    $('div#note').html(`${note[0].content}`)
  })
})
