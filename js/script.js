$(function($) {

  /*grid settings*/
  $(window).on('resize', function () {
    var width = $(this).width();
    if ($(this).width() > 767 && $(this).width() < 1320) {
      $('.container').css('width', (width - 30) + 'px');
    }
    else if ($(this).width() > 1320) {
      $('.container').css('width', '1290px');
    }
    else {
      $('.container').css('width', '100%');
    }
  }).trigger('resize');

  $('a').on('click', function (e) {
    e.preventDefault();
  });


  /*header links*/
  $('.header_lang_options>li>a').eq(0).addClass('active');

  $('.header_lang_options>li>a').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.header_lang_options').find('a.active').removeClass('active');
    $(this).addClass('active');
  });


  $('.city_options, .header_phones').children('a').on('click', function (e) {
    e.preventDefault();
    $(this).next('ul').slideToggle(400);
  });

  $('.main_img_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
  });

  $('.thumbnails>div').eq(0).addClass('active');
  $('.thumbnails>div').on('click', function () {
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('.main_img_slider').slick('slickGoTo', index);
  });

  $('.alike-wrap, .also-buy-1, .Golf1-wrap').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.viewed-items-wrap').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });


  $('[data-tab="#video-reviews-tab"]').on('click',function(){
    if($('.articles').hasClass('slick-initialized')) {
      $('.articles').slick('unslick');
    }
    $('.articles').slick({
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: false
    });
  });

  $('.slider-tabs li').on('click',function(){
    var index = $(this).index()+1;
    if($('.also-buy-'+index).hasClass('slick-initialized')) {
      $('.also-buy-'+index).slick('unslick');
    }
    $('.also-buy-'+index).slick({
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });

  $('.prev_arr').on('click', function () {
    if ($(this).parents('.arr_row.straight').length) {$(this).parents('.arr_row').next().slick('slickPrev')}
    else if ($(this).parent('.articles-wrap').length) {
      $(this).parent().find('.slick-slider').slick('slickPrev')
    } else if ($(this).parents('.slider-tabs').length){
      $(this).parents('.custom-tabs').eq(0).find('.active-tab').find('.slick-slider').slick('slickPrev');
    } else {
      $(this).parents('.select-tabs').eq(0).find('.active-tab').find('.slick-slider').slick('slickPrev');
    }
  });

  $('.next_arr').on('click', function () {
    if ($(this).parents('.arr_row.straight').length) {
      $(this).parents('.arr_row').next().slick('slickNext');
    } else if ($(this).parent('.articles-wrap').length) {
      $(this).parent().find('.slick-slider').slick('slickNext');
    } else if ($(this).parents('.slider-tabs').length){
      $(this).parents('.custom-tabs').eq(0).find('.active-tab').find('.slick-slider').slick('slickNext');
    } else {
      $(this).parents('.select-tabs').eq(0).find('.active-tab').find('.slick-slider').slick('slickNext');
    }

  });

  $('.tab-inner>div').hide();
  $('.tab-inner>div:first-of-type').addClass('active-tab').show();
  $('.custom-tabs li:first-of-type').addClass('active-li');
  $('.custom-tabs li').on('click', function () {
    $(this).parent().find('.active-li').removeClass('active-li');
    $(this).addClass('active-li');
    $(this).parents('.custom-tabs').eq(0).find('.active-tab').removeClass('active-tab').hide();
    $($(this).attr('data-tab')).addClass('active-tab').show();
    var subtabs = $(this).parents('.custom-tabs').eq(0).find('.custom-tabs');
    if (subtabs.length) {
      subtabs.find('.tab-inner>div:first-of-type').addClass('active-tab').show();
    }
  });

  $('.show_all').on('click', function () {
   $(this).parent().find('.hide').removeClass('hide');
    $(this).remove();
  });

  $('[name="buyers-choice"]').on('change', function(){
    var value = $(this).val();
    $(this).parents('.select-tabs').find('.tab-inner>div').hide();
    $(this).parents('.select-tabs').find('.active-tab').removeClass('.active-tab');
    $(this).parents('.select-tabs').find('#'+value).addClass('active-tab').show();
    var wrap = value+'-wrap';
    if ($('.'+wrap).hasClass('slick-initialized')) {
      $('.'+wrap).slick('unslick');
    }
    $('.'+wrap).slick({
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });

  });



  /*(){}[]<>*/
  var a = '(abc{}[]def(aaa)bnhg)cc';
  /*true*/
  var b = '(abc{[]def(aa}a)bnhg)cc ';
  /*false*/
  var c = '(abc{[]def(aaa)}bnhg)cc ';
  /*true*/
  var d = '(abc{[]def(aaa)bnhg)cc ';
  /*false*/
  var e = 'hello([1, 2, 3])';
  /*true*/
  var f = 'hello([1, 2, 3)]';
  /*false*/
  var g = '(((((((((';
  /*false*/
  var h = '' /*true*/;
  var i = 'a(b[<>c]ddd)e' /*true*/;
  var j = '()[]()<>(){}()' /*true*/;
  var k = '([)]' /*false*/;
  var test = '((])';

  function checkString(str) {
    var symbols = [['(',')'],['{','}'],['[',']'],['<','>']];
    var result = true;
    for (var n = 0; n<symbols.length; n++) {
      var firstEntry = str.indexOf(symbols[n][0]);
      var lastEntry = str.lastIndexOf(symbols[n][1]);
      if (firstEntry===-1 && lastEntry ===-1) {
        continue;
      }
      if (firstEntry===-1 && lastEntry !==-1) {
        result = false;
        break;
      }
      if (firstEntry !== -1 || lastEntry !== -1) {
        var startPar1 = 0;
        var endPar1 = 0;
        var startPar2 = 0;
        var endPar2 = 0;
        var startPar3 = 0;
        var endPar3 = 0;
        var startPar4 = 0;
        var endPar4 = 0;
        for (var i = firstEntry+1; i < lastEntry; i++) {
          if (str[i] === '(') {
            startPar1++;
          } else
          if (str[i] === ')') {
            endPar1++;
          }
          if (str[i] === '{') {
            startPar2++;
          } else
          if (str[i] === '}') {
            endPar2++;
          }
          if (str[i] === '[') {
            startPar3++;
          } else
          if (str[i] === ']') {
            endPar3++;
          }
          if (str[i] === '<') {
            startPar4++;
          } else
          if (str[i] === '>') {
            endPar4++;
          }
        }
        if (startPar1!==endPar1 || startPar2!==endPar2 || startPar3!==endPar3 || startPar4!==endPar4) {
          result = false;
          break;
        }
      }
    }
    console.log(result);

  }

  var result = checkString(test);
 /* console.log(result);*/

 $('.item_price').each(function(){
   let price = $(this).text().split(' ')[0];
   $(this).html('<span>'+price+'</span>&nbsp;&nbsp;грн');
 });

  function changeTop (){
    let height = $('.header_second_row').height()-1;
    $('.header-mob-wrap').css('top',height+'px');
  }

  $('.header-burger').click(function () {
    $('.header-burger').toggleClass('active');
    changeTop();
    $('.header-mob').toggleClass('active');
    $('.header-mob-wrap .header_lang_options>li>a').eq(0).toggleClass('active');
    $('body').toggleClass('open');
  });

  $(window).on('resize', function(){
    changeTop();
  }).trigger('resize');








});