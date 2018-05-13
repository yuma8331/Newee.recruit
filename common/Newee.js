$(function(){
  //クリックイベント
  $(".menu-icon").click(function(){
    //body内の最後に<div id="modal-bg"></div>を挿入
    $("body").append('<div id="modal-bg"></div>');

    //モーダルウィンドウを表示
    $(".modal-wrapper,.modal,.menu-close").fadeIn();
    $('.menu-icon').fadeOut();

    //画面のどこかをクリックしたらモーダルを閉じる
    $(".menu-close").click(function(){
      $('.menu-icon').fadeIn();
      $(".modal-wrapper,.modal").fadeOut(function(){
        //挿入した<div id="modal-bg"></div>を削除
        $('#modal-bg').remove() ;
      });
    });
  });
});
