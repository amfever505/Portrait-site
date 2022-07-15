let arr = [
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.3036195314571!2d139.79661944530517!3d35.71140758108661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6985348d9%3A0xa38acc0a25dd3866!2z44CSMTExLTAwMzIg5p2x5Lqs6YO95Y-w5p2x5Yy65rWF6I2J77yR5LiB55uu77yR4oiS77yR!5e0!3m2!1sja!2sjp!4v1657090393825!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5205106788126!2d139.79230528445618!3d35.71341532052751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6db068cd1%3A0xd9a856805c8012bd!2z5rWF6I2J5a-6IOmbt-mWgA!5e0!3m2!1sja!2sjp!4v1656990439948!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.6041519443143!2d139.79565771779392!3d35.711357592627806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec6c724bae1%3A0x1e2481e8e8a756a7!2z6Kaz6Z-z6YCa44KK!5e0!3m2!1sja!2sjp!4v1657090467423!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.8142160877164!2d139.7960255329659!3d35.710760235342335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec130fbdd3d%3A0x5135221a7fa19dbc!2z5Luy6KaL5LiW5ZWG5bqX6KGX!5e0!3m2!1sja!2sjp!4v1656997755154!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.8034216660717!2d139.79394301772115!3d35.711291377864285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f0dfb0dfdfb%3A0x4936f895a728a9b8!2z44K544K_44O844OQ44OD44Kv44K5IOOCs-ODvOODkuODvCDpm7fploDlupc!5e0!3m2!1sja!2sjp!4v1656997916746!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809.8860340497179!2d139.7941406963892!3d35.7128341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f33fd93d0c5%3A0xa2dd53afd9eb6740!2z5Lyd5rOV6Zmi6YCa44KK!5e0!3m2!1sja!2sjp!4v1657088660952!5m2!1sja!2sjp',
  // 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.94155306297824!2d139.79670008104605!3d35.7131222249502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f1361d7e59f%3A0x417154e22112484a!2z5aSn5q2j44Ot44Oe44Oz6aSo!5e0!3m2!1sja!2sjp!4v1657088921426!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.499455507634!2d139.79444461744384!3d35.713933300000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec10f6fc403%3A0xc401cd525f9f8276!2z5a6d6JS16ZaA!5e0!3m2!1sja!2sjp!4v1657089162763!5m2!1sja!2sjp',
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.63225512051!2d139.794365051128!3d35.710666180090136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec1060d67af%3A0x7740294b7ef17d49!2z5rWF6I2J5paH5YyW6Kaz5YWJ44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1657090223559!5m2!1sja!2sjp',
];
const map = $('#map');

$(window).resize(() => {
  isPhone();
});

const toggleMap = () => {
  $(window).on('scroll', () => {
    const header = $('header')[0];
    let mvHeight = header.clientHeight;
    console.log(window.pageYOffset, mvHeight);
    if (window.pageYOffset >= mvHeight) {
      // show
      map.css({ opacity: 1, height: 'auto' });
    } else {
      map.css({ opacity: 0, height: 0 });
    }
  });
};

const isPhone = () => {
  if ($(window).width() <= 768) {
    console.log('スマホ');
    toggleMap();
  }
};
isPhone();

const isPC = () => {
  const main = $('main');

  if ($(window).width() > 768) {
    console.log('PC');
    console.log(window.pageYOffset, main.offset().top);

    $(window).bind('mousewheel', function (event) {
      if (event.originalEvent.wheelDelta >= 0) {
        console.log('Scroll up');
      } else {
        console.log('Scroll down');

        window.scrollTo({
          top: main.offset().top,
          // behavior: 'smooth',
        });
      }
    });
  }
};

isPC();

// scrollでmapの中身変わる

$(window).bind('mousewheel', (e) => {
  console.log(window.pageYOffset, $('#2').offset().top);
  arr.forEach((item, index) => {
    if (index == arr.length - 1) {
      if (window.pageYOffset > $('#' + (index + 1)).offset().top - 100 && $('iframe').attr('src') != item) {
        $('iframe').attr('src', item);
      }
    } else {
      if (
        window.pageYOffset > $('#' + (index + 1)).offset().top - 100 &&
        window.pageYOffset < $('#' + (index + 2)).offset().top - 100 &&
        $('iframe').attr('src') != item
      ) {
        $('iframe').attr('src', item);
      }
    }
  });
});

// map switch
$('#map-switch').on('click', () => {
  $('#map-content').css('display') == 'none'
    ? $('#map-content').css({ display: 'block' })
    : $('#map-content').css({ display: 'none' });
});
