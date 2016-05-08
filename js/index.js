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
  console.log("slides", slides)
  setInterval(function() {
    $(slides[currentSlideIndex]).removeClass("shown").addClass("hidden")

    if (slides.length > 2) {
      $(slides[previousSlideIndex]).removeClass("hidden")
      previousSlideIndex = currentSlideIndex
    }

    currentSlideIndex = currentSlideIndex != slides.length - 1 ? currentSlideIndex + 1 : 0

    $(slides[currentSlideIndex]).removeClass("hidden").addClass("shown")
  }, 2000)

  // slideshow

  /*var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'https://placekitten.com/600/400',
          w: 600,
          h: 400
      },
      {
          src: 'https://placekitten.com/1200/900',
          w: 1200,
          h: 900
      }
  ];

  // define options (if needed)
  var options = {
      index: 0,
      loop: true,
      modal: false
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe( pswpElement, false, items, options);
  gallery.init();*/
})