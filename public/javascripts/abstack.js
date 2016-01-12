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
    var retianImg = new Image();

    retianImg.onload = function () {
      img.src = src;
    }

    retianImg.src = src;
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
    }, 2600);
  }
})();

/**
 * 返回顶部按钮与 LOGO 切换
 */
;(function () {
  var scrollBtn = document.getElementById('scroll-flip-button');
  window.addEventListener('scroll', function () {
    var scrollTop =  (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    if(scrollTop > 1000){
      if(scrollBtn.className.indexOf('flipped') == -1)
        scrollBtn.className += ' flipped';
    }else{
      scrollBtn.className = scrollBtn.className.replace(' flipped', '');
    }
  });
  scrollBtn.addEventListener('click', function (ev) {
    ev = ev || event;
    ev.preventDefault();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
})();
