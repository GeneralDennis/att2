import './index.sass'

export default () => {
  const $openmenu = $('.js-burger-open');
  const $closemenu = $('.js-burger-close');
  const $menu = $('.burger-menu');
  $openmenu.on('click', ()=>{
    $menu.addClass('burger-menu--open');
  })
  $closemenu.on('click', ()=>{
    $menu.removeClass('burger-menu--open');
  })
}
