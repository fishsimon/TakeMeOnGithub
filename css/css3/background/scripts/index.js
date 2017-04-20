/**
 * Created by lenovo on 2017/4/20.
 */
var $window = $(window);
var $windowHeight = $window.height();
var totalScroll = 0;
function animateScroll(dir) {
    //获取当前window已经滚动的距离
    var sCrolltop = $window.scrollTop();
    //向下滚
     if(dir){
         //以动画的效果使window向下滚一屏的高度
         var downInterval = setInterval(function () {
             sCrolltop += 10;  //动画每帧滚动的距离以像素为单位
             if(sCrolltop >= (totalScroll+1)*$windowHeight){
                 sCrolltop = (totalScroll+1)*$windowHeight;
                 clearInterval(downInterval);
                 totalScroll ++;
                 isClickRunning = false;
                 // $windowHeight += $windowHeight;
             }
             $window.scrollTop(sCrolltop);
         },10);
    }else
     //向上滚
        {
            //以动画的效果使window向上滚一屏的高度
         var upInterval = setInterval(function () {
             sCrolltop -= 10;
             if(sCrolltop<=(totalScroll-1)*$windowHeight){
                 sCrolltop = (totalScroll-1)*$windowHeight;
                 totalScroll--;
                 clearInterval(upInterval);
                 isClickRunning = false;
             }
             $window.scrollTop(sCrolltop);
         },10);

    }
}
//当window触发滚动事件时，区分是鼠标点击上下按钮执行的滚动还是用户滚鼠标时执行的滚动
var isClickRunning = false;
setTimeout(function () {
    $window.scrollTop(0);
},0);
//监听向上滚、向下滚按钮单击事件
$(".direction.up").click(function () {
    if(isClickRunning)return;
    if(!totalScroll)return;
    animateScroll(0);
    isClickRunning = true;
});
var totalImg = $(".bg-item").length;
$(".direction.down").click(function () {
    if(isClickRunning)return;
    if(totalScroll >= (totalImg - 1))return;
    animateScroll(1);
    isClickRunning = true;
});


$window.scroll(function () {
    if(!isClickRunning){
        var wScrolltop = $window.scrollTop();
        var current = Math.floor(wScrolltop / $windowHeight);
        totalScroll = current;
    }
});
