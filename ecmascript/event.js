/**
 * Created by Administrator on 2017/3/27 0027.
 */
var heatUp = {
    startHOTuP:null,
    hotSuccess:null,
    current:0,
    boilPoint:85,
    hotUp:function(){
        if(this.startHOTuP){
            this.startHOTuP();
        }
       while(this.current<this.boilPoint){
           this.current = this.current+1;
       }
       if(this.hotSuccess){
           this.hotSuccess();
       }
    }
};
heatUp.startHOTuP = function(){
    console.log("开始烧开水");
};
heatUp.hotSuccess = function(){
    console.log("水烧开了");
};
heatUp.hotUp();