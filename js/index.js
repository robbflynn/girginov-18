$(function() {
  var $mm = $(".mobile-menu")
  var toggleMenu = function() {
    if (!$mm.hasClass("shown")) {
      $(".mobile-menu").removeClass("hidden").addClass("shown")
    } else {
      $(".mobile-menu").removeClass("shown").addClass("hidden")
    }
  }

  $(".mobile-menu ul a").click(toggleMenu)
  $(".mobile-menu-btn, .close-btn, .close-area").click(function() {
    toggleMenu()
    return false
  })

  var slides = $(".slide")
  var currentSlideIndex = 0
  var previousSlideIndex = slides.length - 1

  setInterval(function() {
    $(slides[currentSlideIndex]).removeClass("shown").addClass("hidden")

    if (slides.length > 2) {
      $(slides[previousSlideIndex]).removeClass("hidden")
      previousSlideIndex = currentSlideIndex
    }

    currentSlideIndex = currentSlideIndex != slides.length - 1 ? currentSlideIndex + 1 : 0

    $(slides[currentSlideIndex]).removeClass("hidden").addClass("shown")
  }, 2000)

  var openPhotoSwipe = function(index, items, disableAnimation, fromURL) {
    var pswpElement = document.querySelectorAll('.pswp')[0],
        gallery,
        options;

    options = {
      index: parseInt(index, 10)
    }

    // exit if index not found
    if( isNaN(options.index) ) {
      return;
    }

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    // Pass data to PhotoSwipe and initialize it
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  }

  var heatingGallery = []

  $(".screenshots .screenshot").each(function(index, el) {
    heatingGallery.push({
      src: $(el).attr("href"),
      w: 600,
      h: 400
    })

    $(el).click(function() {
      openPhotoSwipe(index, heatingGallery)
      return false
    })
  })
})