$('.btn-show-hide').on('click', function (e) {
  $('.box').toggleClass('show');
});

$('.btn-move').on('click', function (e) {
  $('.diamond').toggleClass('slide');
});

$('.btn-collapse-expand').on('click', function (e) {
  $('.panel').toggleClass('collapse');
});

$('.btn-bounce').on('click', function (e) {
  $('.circle').addClass('bounce');
});

$('.circle').on('animationend', function (e) {
  $('.circle').removeClass('bounce');
});

$('.btn-append').on('click', function (e) {
  $('.list').append('<li>New List Item</li>');
});
