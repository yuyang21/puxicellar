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

        $('#guide').css({transform: 'rotate(-90deg)', transition: '.2s all linear'});
        $('.navBar ul').stop().animate({height: '3.56rem'})
        $('#navBar').attr('height','4.13rem')
        // $('.navBar').height('4.13rem')
        $('#navBar').height('4.13rem')
        $('#navBar').css({'height': '4.13rem'})
        console.log(1)
        } else {
        $('#guide').css({transform: 'rotate(0deg)'});
        $('.navBar ul').stop().animate({height: '0'})
        }
    })

    // 菜单栏切换
    var indexTab = 0
    if (window.location.href.indexOf('tab') !== -1) {
      indexTab = window.location.href.split('tab=')[1].split('')[0]
    }
    var $tab_list = $(".tab_list li");
    $tab_list.removeClass('active');
    $tab_list.eq(indexTab).addClass('active');
    $('.content').hide();
    $('.content').eq(indexTab).show();
    var url = window.location.href
    $tab_list.click(function(){
      var arr = getQueryString('tab')
      function getQueryString(name) {  
        arr = window.location.href.split(name + '=')
        return arr
      }
      var index = $tab_list.index(this);
      if (window.location.href.indexOf('tab') === -1){
        window.location.href += '?tab=' + index
      } else {
        window.location.href = arr[0] + 'tab=' + index + arr[1].substr(1)
      }
    })
    // img未加载 
    if(window.location.href.indexOf('index') !== -1) {
      $('img').attr('onerror', "onerror=null;src='./images/case/more_case.png';style='width: 17vh;height: auto;margin: 0.2rem auto;'")
    } else {
      $('img').attr('onerror', "onerror=null;src='../images/case/more_case.png';style='width: 17vh;height: auto;margin: 0.2rem auto;'")
    }
})