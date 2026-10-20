$(function () {

  // CTA form handler (jQuery)
  $('#bookForm').on('submit', function (e) {
    e.preventDefault();
    if ($(this).valid()) {
      const btn = $(this).find('button[type="submit"]');
      const original = btn.html();
      btn.html('<span class="spinner-border spinner-border-sm" role="status"></span> Sending…').prop('disabled', true);
      setTimeout(function () {
        btn.html(original).prop('disabled', false);
        $('#bookSuccess').removeClass('d-none');
        $(this).trigger('reset');
      }, 700);
    } else {
      $(this).addClass('was-validated');
    }
  });

  // Back-to-top button (pure jQuery)
  var toTop = $('#toTop');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 420) toTop.addClass('show');
    else toTop.removeClass('show');
  });
  toTop.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 480);
  });

  // Navbar shadow grows on scroll (lightweight)
  var last = 1;
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();
    var shadow = st > last ? Math.min(6, last + 0.4) : Math.max(0, last - 0.5);
    $('nav.bg-bright').css('box-shadow', '0 ' + shadow + 'px 10px -8px rgba(20,61,56,0.15)');
    last = st;
  }).trigger('scroll');

});

