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
  $('.circle').toggleClass('bounce');
});
