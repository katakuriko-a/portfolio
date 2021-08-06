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
    humberger.li.classList.remove('show');
    humberger.classList.add('humberger');
  }

  menu.addEventListener('click', () => {
    humberger.classList.add('show');
    humberger.li.classList.add('show')
    humberger.classList.remove('humberger');
    targets.forEach(target => {
      classList.add('hidden');
    });


    
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



}