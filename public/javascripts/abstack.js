/**
 * 为 retina 设备启用 双倍图
 */
;(function () {
  if(window.devicePixelRatio && window.devicePixelRatio > 1){
    var imgs = document.getElementsByTagName('img');

    for(var i = 0;i < imgs.length;i++){
      if(imgs[i].getAttribute('no-retina') == null){
        var src = imgs[i].src.split('.');
        src[0] += '@2x';
        load2xImg(src.join('.'), imgs[i]);
      }
    }
  }

  function load2xImg (src, img) {
    var retinaImg = new Image();

    retinaImg.onload = function () {
      img.src = src;
    }

    retinaImg.src = src;
  }
})();

/**
 * 首页 slogan 翻转动画
 */
;(function () {
  var text = document.getElementById('animate-abstack-text');
  if(text){
    setTimeout(function () {
      document.getElementById('animate-abstack-text').className += ' flipped';
    }, 2200);
  }
})();

/**
 * 返回顶部按钮与 LOGO 切换
 */
;(function () {
  var scrollBtn = document.getElementById('scroll-flip-button');
  if(!scrollBtn)
    return;
  var fliper = scrollBtn.parentNode;
  window.addEventListener('scroll', function () {
    var scrollTop =  (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    if(scrollTop > 1000){
      if(fliper.className.indexOf('flipped') == -1)
        fliper.className += ' flipped';
    }else{
      fliper.className = fliper.className.replace(' flipped', '');
    }
  });
  scrollBtn.addEventListener('click', function (ev) {
    ev = ev || event;
    ev.preventDefault();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})();

/**
 * 关于页面的滚动部分
 */
;(function () {
  var header = document.getElementsByClassName('header')[0];

  header.hide = function () {
    if(header.className.indexOf('hide') == -1){
      header.className += ' hide';
    }
  }

  header.show = function () {
    if(header.className.indexOf(' hide') > -1){
      header.className = header.className.replace(' hide', '');
    }
  }

  if(document.getElementById('about-scroll-container')){
    onePageScroll('#about-scroll-container', {
      beforeMove: function (index) {
        if(index > 1)
          header.hide();
      },
      afterMove: function (index) {
        index *=1;

        if(index == 1){
          header.show();
        }else{
          header.hide();
        }
        switch(index){
          case 2:
            var video = document.querySelectorAll('#about-scroll-container video')[1];
            if(video.isPlay)
              break;
            video.play();
            video.isPlay = true;
            break;
        }
      }
    });
  }
})();

/**
 * 关于页面的视频高度计算部分及 loading 部分
 */
;(function () {
  var videos = document.querySelectorAll('.video-container video');

  if(videos.length){
    setVideoSize();
    window.addEventListener('resize', setVideoSize);
  }

  function setVideoSize () {
    var ratio = window.innerWidth / window.innerHeight,
        isMoreThanGoldenRatio = ratio > 16 / 9;

    for(var i = 0;i < videos.length;i++){
      if(isMoreThanGoldenRatio){
        videos[i].style.width = null;
        videos[i].style.height = 'auto';
      }else{
        videos[i].style.height = null;
        videos[i].style.width = 'auto';
      }
    }
  }

  var firstVideo = videos[0],
      container = document.getElementById('about-scroll-container');

  function completeVideoLoad () {
    container.className = container.className.replace('loading', '');
    firstVideo.play();
  }

  if(firstVideo){
    firstVideo.addEventListener('progress', function () {
      var end = 0;
      try{
        end = this.buffered.end(0);
      }catch(e){}
      var percent = parseInt(end / this.duration * 100);

      container.setAttribute('percent', percent);

      percent == 100 && completeVideoLoad();
    }, false);

    firstVideo.addEventListener('loadeddata', completeVideoLoad, false);
  }
})();
