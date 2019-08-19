
  // Cursor left right in gallery
  // gallery instance is needed
  $(window).on('mousemove', function(e) {
    var galleryPos = $('.gallery-wrapper').position();
    var galleryOffset = $('.gallery-wrapper').offset();
    var galleryHeight = $('.gallery-wrapper').innerHeight();
    var galleryWidth = $('.gallery-wrapper').width();
    var mousePosX = e.pageX;
    var mousePosY = e.pageY;

    if(mousePosY > galleryOffset.top && mousePosY < galleryOffset.top + galleryHeight) {
      console.log('hahihu')
      if(mousePosX > galleryPos.left && mousePosX < (galleryPos.left + galleryWidth/2)) {
        $('.gallery-wrapper').removeClass('cursor-is-right');
        $('.gallery-wrapper').addClass('cursor-is-left')
      } else if(mousePosX > galleryWidth/2 && mousePosX <  (galleryPos.left + galleryWidth)) {
        $('.gallery-wrapper').removeClass('cursor-is-left');
        $('.gallery-wrapper').addClass('cursor-is-right');
      } else {
        $('.gallery-wrapper').removeClass('cursor-is-left')
        $('.gallery-wrapper').removeClass('cursor-is-right')
      }
    }
  })

  $('.gallery-wrapper').click(function() {
    if($(this).hasClass('cursor-is-left') && gallery) {
      gallery.slidePrev();
    } else if($(this).hasClass('cursor-is-right')) {
      gallery.slideNext();
    }
  })