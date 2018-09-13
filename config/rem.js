(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = clientWidth / 3.75 + "px";
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function(){
    // 导航栏动效
    var showNav = false
    $('#guide').click(function(){
        showNav = !showNav
        if(showNav){
        $('#guide').css({transform: 'rotate(-90deg)'});
        $('.navBar ul').stop().animate({height: '3.56rem'})
        } else {
        $('#guide').css({transform: 'rotate(0deg)'});
        $('.navBar ul').stop().animate({height: '0'})
        }
    })

    // 菜单栏切换
    var $tab_list = $(".tab_list li");
    var queryType = location.href.split('?')[1];
    if (queryType) {
      var indexTab = queryType.split('=')[1];
    } else {
      var indexTab = 0
    }
    $tab_list.siblings().removeClass('active');
    $tab_list.eq(indexTab).addClass('active');
    $('.content').hide();
    $('.content').eq(indexTab).show();
    $tab_list.click(function(){
      var index = $tab_list.index(this);
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.content').hide();
      $('.content').eq(index).show();
    })

    // footer
    $('#tel').click(function () {
        window.location.href = "tel:4001171855"
    })
})