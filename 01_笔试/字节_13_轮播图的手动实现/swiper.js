var autoPlay = true;
var autoPlay_Delay = 2000;//2s
var autoplayId;
var intervalId;

// 声明为全局变量
var slider;
var slider_item_container;
var slider_item;
var indicator_container;
var slider_item_width;
var curIndex = 0;

// js加载
window.onload = function () {
  initElement();
  initEvent();
  if (autoPlay) {
    startAnimation(slider_item_container);
  }
}

// 初始化元素
function initElement() {
  slider = document.getElementById('slider');
  slider_item_container = document.getElementsByClassName('slieder-item-container')
  slider_item = slider.getElementById('li');
  indicator_container = document.getElementsByClassName('indicator-container')

  var firstItem = slider_item[0].cloneNode(true);
  slider_item_container.appendChild(firstItem);

  slider_item_width = slider_item[0].offsetWidth;
}

// 事件初始化
function initEvent() {
  // (鼠标放在轮播图上,停止自动播放)
  slider.addEventListener('mouseover', function () {
    clearTimeout(autoplayId);
    autoPlay = false;
  })
  // 鼠标离开开始自动播放
  slider.addEventListener('mouseout', function () {
    autoPlay = true;
    startAnimation(slider_item_container);
  });
  // 索引事件
  var indicators = indicator_container.children;//获取子元素
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].setAttribute('index', i);
    indicators[i].addEventListener('click', function () {
      var index = parseInt(this.getAttribute('index'));
      next(index);//执行下一次index
    })
  }

  //获取箭头函数
  var left_arrow = document.getElementsByClassName('left-arrow')[0];
  var right_arrow = document.getElementsByClassName('right-arrow')[0];
  left_arrow.addEventListener('click', function () {
    prev();
  })
  right_arrow.addEventListener('click', function () {
    next();
  })

}

// 函数执行
function animation(element, target) {
  var step = 10;
  var tme = 10;
  var gap = (Math.abs(target - element.offsetLeft) / slider_item_width)
  if (gap > 1) {
    step = step * gap;
    time = time / gap;
  }
  if (element) {
    step = (element.offsetLeft > target) ? -step : step;
    clearInterval(intervalId);
    setCurrentActiveIndicator(curIndex);
    intervalId = setInterval(() => {
      if (Math.abs(element.offsetLeft + step) < Math.abs(target)) {
        element.style.left = element.offsetLeft + step + "px";
      } else {
        if (Math.abs(target - element.offsetLeft) > Math.abs(step)) {
          element.style.left = element.offsetLeft + step + "px";
        } else {
          clearInterval(intervalId);
          intervalId = -1;
          element.style.left = target + "px";
          if (autoplay) {
            startAnimation(element);
          }
        }
      }
    }, time);
  }
}
// 播放前一个动画
function prev() {
  var element = element ? element : slider_item_container;
  var li = element.children;
  curIndex = curIndex - 1;
  if (curIndex < 0) {
    element.style.left = -((li.length - 1) * slider_item_width) + "px";
    curIndex = li.length - 2;
  }
  animate(element, -(curIndex * slider_item_width));
}
function next(nextIndex) {
  var element = slider_item_container;
  var li = element.children;
  if ((nextIndex != null) && (typeof (nextIndex) != "undefined")) {
    curIndex = nextIndex;
  } else {
    curIndex = curIndex + 1;
    if (curIndex > (li.length - 1)) {
      element.style.left = 0 + "px";
      curIndex = 1;
    }
  }
  animate(element, -(curIndex * slider_item_width));
}
function startAnimation(element) {
  if (autoplayId) {
    clearTimeout(autoplayId);
  }
  autoplayId = setTimeout(function () {
    next();
  }, autoplay_Delay);
}

function setCurrentActiveIndicator(index) {
  var indicators = indicator_container.children;
  if (index == indicators.length) {
    index = 0;
  }
  for (var i = 0; i < indicators.length; i++) {
    if (i == index) {
      indicators[i].className = "indicator active";
    } else {
      indicators[i].className = "indicator";
    }
  }
}
