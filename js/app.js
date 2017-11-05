$(function(){

//Menu
  var li = $('nav li').eq(0);
  var menu = $('.list');

  menu.hide();

  li.on('mouseover', function(){
      menu.show();
  });
  li.on('mouseout', function(){
      menu.hide();
  });

//Slider
  var pictures = $('.pictures li');
  var counter = 0;

  pictures.hide();
  pictures.eq(counter).show();

  $('.right').on('click', function(){
    pictures.eq(counter).hide();
    counter++;
    if(counter == pictures.length){
      counter = 0;
    }
    pictures.eq(counter).show();
  });

  $('.left').on('click', function(){
    pictures.eq(counter).hide();
    counter--;
    if(counter == -1){
      counter = pictures.length-1;
    }
    pictures.eq(counter).show();
  });

//Name-hiding
  var img = $('.img');
  var name = $('.name');

    img.eq(0).on('mouseover', function(){
      name.eq(0).hide();
    });
    img.eq(1).on('mouseover', function(){
      name.eq(1).hide();
    });

    img.eq(0).on('mouseout', function(){
      name.eq(0).show();
    });
    img.eq(1).on('mouseout', function(){
      name.eq(1).show();
    });

//Animated counter
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});
