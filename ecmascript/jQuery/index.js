/**
 * Created by lenovo on 2017/4/5.
 */
$(document).ready (function () {
    var container = $(".container");
    var pins = $(".pin");
    var isMouseDown = false;
    var subX,subY,mouseX,mouseY;
    container.mousedown(function (e) {
        isMouseDown = true;
        var ele = e.currentTarget;
        subX = e.pageX - ele.offsetLeft;
        subY = e.pageY - ele.offsetTop;
    });
    $(window).mouseup(function () {
        isMouseDown = false;
        downEle = null;
    }).mousemove(function (e) {
         mouseX = e.pageX;
         mouseY = e.pageY;
        if (isMouseDown){
            container.offset({
                left:e.pageX - subX,
                top:e.pageY - subY
            });
            // container.offsetLeft = (e.pageX - subX) + "px";
            // container.offsetTop = (e.pageY - subY) + "px";
        }
        if(downEle){
            var oSet = container.offset();
            if(downEle.index === 2){
                container.width(e.pageX - oSet.left);
                container.height(e.pageY - oSet.top);
            }
            if(downEle.index === 3){
                var subLeft = oSet.left - e.pageX;
                container.width(oSet.left - e.pageX + container.width());
                container.height( e.pageY - oSet.top);
                container.offset({
                    left: oSet.left - subLeft
                });
            }
           if(downEle.index === 1){
               var subTop = oSet.top - e.pageY;
               container.width(e.pageX - oSet.left);
               container.height(oSet.top - e.pageY + container.height());
               container.offset({
                   top: oSet.top - subTop
               });
           }
           if(downEle.index === 0){
               var subLeft1 = oSet.left - e.pageX;
               var subTop1 = oSet.top - e.pageY;
               container.width(oSet.left - e.pageX + container.width());
               container.height(oSet.top - e.pageY + container.height());
               container.offset({
                   top: oSet.top - subTop1,
                   left: oSet.left - subLeft1
               });
           }
        }
    });
   var downEle = null;
   pins.mousedown(function (e) {
       e.preventDefault();
       e.stopPropagation();
       var target = e.currentTarget;
       downEle = {};
       downEle.index = pins.index($(target));
       console.log(downEle.index);
   });
});
