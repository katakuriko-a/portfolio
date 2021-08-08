'use strict';

{
  //モーダルウィンドウ
  const targets = document.querySelectorAll('h3');

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }
        entry.target.classList.add('appear');
        obs.unobserve(entry.target);

    });

  }

  const options = {
    threshold: 0.6,
  }

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });

  //ハンバーガーメニュー


  const menu = document.getElementById('menu');
  const close = document.getElementById('close');
  const menub = document.getElementById('menub');
  const menua = document.getElementById('menua');
  const menuc = document.getElementById('menuc');
  const menud = document.getElementById('menud');
  const humberger = document.querySelector('.humberger');
  const humbergerLi= document.querySelector('.humberger li');

  function sidebar() {
    humberger.classList.remove('show');
    humberger.classList.add('humberger');
  }

  menu.addEventListener('click', () => {
    humberger.classList.add('show');
    humberger.classList.remove('humberger');
    
  });

  close.addEventListener('click', () => {
    sidebar();
  });

  menub.addEventListener('click', () => {
    sidebar();
  });
  menua.addEventListener('click', () => {
    sidebar();
  });
  menuc.addEventListener('click', () => {
    sidebar();
  });
  menud.addEventListener('click', () => {
    sidebar();
  });

  //マウスストーカー

  const stalker = document.getElementById('stalker');

  let hovFlag = false;

  document.addEventListener('mousemove', function (e) {
    if (!hovFlag){
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'
    }
  });

  //リンクへ吸い付く処理
  const linkElem = document.querySelectorAll('a');
  const clk = document.getElementById('clk');
  for (let i = 0; i < linkElem.length; i++) {

    linkElem[i].addEventListener('mouseover', function (e) {
      hovFlag = true;
      stalker.classList.add('hov_');
      clk.classList.add('hov_');

      let rect = e.target.getBoundingClientRect();
      let posX = rect.left + (rect.width / 2);
      let posY = rect.top+ (rect.height / 2);

      stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)'
    });

    linkElem[i].addEventListener('mouseout', function (e) {
      hovFlag = false;
      stalker.classList.remove('hov_')
      clk.classList.remove('hov_')
    });
  }



}