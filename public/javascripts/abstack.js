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
