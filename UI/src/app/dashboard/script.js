$('.front', '.card').on('click', function() {
  $(this).hide();
  $(this).siblings('.back').show();
});

$('.back', '.card').on('click', function() {
  $(this).hide();
  $(this).siblings('.front').show();
});
