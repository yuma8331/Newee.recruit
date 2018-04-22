$(function() {
  $('.member-list').find('a').hover(function() {
    console.log($(this).find('.member-list-inner'));
    $(this).find('.member-list-inner').fadeToggle(400);
    // $('#net1').find('p').toggle();
    // console.log($('#net1'));
    // if($('.member-list-inner').hasClass('text-active')) {
    //   $('.member-list-inner').removeClass('text-active');
    // } else {
    //   $('.member-list-inner').addClass('text-active');
    // }
  });
});
