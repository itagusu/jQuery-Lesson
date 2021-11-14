// $(function(){
//  $('.box1').slideDown(function(){
//   $('.box1').css({
//     'background-color':'#0000ff',
//     'height':'100px'
//   }).slideUp();
//  });
// });

// $(function(){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px',
//     'width': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
  
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color':'#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//       'background-color':'#0000FF',
//       'height':'200px',
//       'width':'200px',
//     }).slideUp();
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color':'#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color':'#FF0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

$(function(){
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout('click',function(){
    $('.box1').removeClass('box1-ext');
  });
});