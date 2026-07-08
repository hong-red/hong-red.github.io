// 全局樱花鼠标效果
// 鼠标变成一朵小樱花，静止 5 秒后从鼠标位置缓缓飘落一片花瓣
(function() {
  'use strict';

  // 在触摸设备上禁用，避免误触
  if (window.matchMedia('(pointer: coarse)').matches) return;

  var cursor = document.createElement('div');
  cursor.className = 'sakura-cursor';

  // 五瓣樱花
  for (var i = 0; i < 5; i++) {
    var petal = document.createElement('span');
    petal.className = 'cursor-petal';
    petal.style.transform = 'translate(-50%, -50%) rotate(' + (i * 72) + 'deg)';
    cursor.appendChild(petal);
  }

  // 花心
  var center = document.createElement('span');
  center.className = 'cursor-center';
  cursor.appendChild(center);

  document.body.appendChild(cursor);

  var mouseX = window.innerWidth / 2;
  var mouseY = window.innerHeight / 2;
  var idleTimer = null;
  var isIdle = false;

  function updateCursor(x, y) {
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  }

  function createFallingPetal(x, y) {
    var petal = document.createElement('div');
    petal.className = 'falling-petal';
    petal.style.left = x + 'px';
    petal.style.top = y + 'px';

    var duration = 4 + Math.random() * 2;
    var sway = (Math.random() - 0.5) * 120;
    var rotate = Math.random() * 360;

    petal.style.setProperty('--fall-duration', duration + 's');
    petal.style.setProperty('--fall-sway', sway + 'px');
    petal.style.setProperty('--fall-rotate', rotate + 'deg');

    document.body.appendChild(petal);

    setTimeout(function() {
      if (petal.parentNode) {
        petal.parentNode.removeChild(petal);
      }
    }, duration * 1000 + 100);
  }

  function onIdle() {
    isIdle = true;
    createFallingPetal(mouseX, mouseY);
    // 如果一直静止，每隔 5 秒再飘落一片
    idleTimer = setTimeout(onIdle, 5000);
  }

  function resetIdleTimer() {
    isIdle = false;
    if (idleTimer) {
      clearTimeout(idleTimer);
    }
    idleTimer = setTimeout(onIdle, 5000);
  }

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    updateCursor(mouseX, mouseY);
    resetIdleTimer();
  });

  // 鼠标离开窗口时隐藏光标
  document.addEventListener('mouseleave', function() {
    cursor.style.opacity = '0';
  });

  document.addEventListener('mouseenter', function() {
    cursor.style.opacity = '1';
  });

  updateCursor(mouseX, mouseY);
  resetIdleTimer();
})();
