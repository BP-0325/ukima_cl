$(function () {
  $('.ham_js').on('click', function () {        // js-btnクラスをクリックすると、
    $('.header_menu , .ham_line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});