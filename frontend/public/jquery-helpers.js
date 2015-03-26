$('ul.roll').perfectScrollbar({
  suppressScrollX: true
});

$(window).resize(function() {
  if (window.innerHeight < 600) {
    $('ul.roll').height(window.innerHeight - 200);
  }
});

