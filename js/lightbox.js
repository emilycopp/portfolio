var $container = $('.container');
var $lbImg = $('.lightbox-img');
var $lb = $('.lightbox');
var $btnClose = $('.btn-close');

$container.on('touchstart click', 'a', function (e) {
  var big = $(this).attr('href');
  $lbImg.attr('src', '//emilycopp.github.io' + big);
  $lb.attr('data-state', 'visible');
  $('html body').addClass('no-scroll');
  e.preventDefault();
});

$btnClose.on('touchstart click', function () {
  $lb.attr('data-state', 'hidden');
  $('html body').removeClass('no-scroll');
})
