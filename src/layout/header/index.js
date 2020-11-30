import './header.sass';

export default () => {
  const $openButt = $('.js-open-submenu');
  const $submenu = $('.header__submenu');
  if($openButt.length) {
    $openButt.on('click', ()=>{
      $openButt.toggleClass('header__menu-item--active');
      $submenu.slideToggle();
    })
  }
}
