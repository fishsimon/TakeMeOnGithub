/**
 * Created by Administrator on 2017/3/27 0027.
 */

//函数的调用方式
// 第一种：直接调用
window.message = "I'm window msg";
function outputMsg(){
    console.log(this.message);
}
outputMsg();
//第二种：对象中的方法调用
var order = {
    goods:['iphone','耳机'],
    totalPrice:8300,
    //商品打折
    discount:function(){
        var  p = this.totalPrice*80/100;
        console.log(p);
    }
};
order.discount();

var orderFestival = {
    totalPrice:2000
};
//传递方法的定义，而不是方法的调用结果
orderFestival.discount = order.discount;
orderFestival.discount();

//第三种：指定this调用
window.brand = "Apple";
var lenovo = {brand:'lenovo'};
function computerManufacture(type,childtype) {
    console.log(this.brand + ":" + type + ':' + childtype);
}
computerManufacture.apply(window,["macAir","b型"]);
computerManufacture.apply(lenovo,["y系","小y"]);
computerManufacture.call(window,"macAir","b型");
computerManufacture.call(lenovo,"y系","小y");
var rComputer = computerManufacture.bind(lenovo,"bind","1");
rComputer();

//第四种：new关键字调用
function Room(layer,owner,size) {
    this.layer = layer;
    this.owner = owner;
    this.size = size;
}
var xiaoRoom = new Room('第一层','老外','100平米');
console.log(typeof xiaoRoom);
console.log(xiaoRoom);
//new 关键字调用函数，具体做了什么
var empty = {};  //新生成一个对象
Room.call(empty);   //调用函数的call方法
empty.__proto__ = Room.prototype;   //原型链属性赋值
xiaoRoom = empty;   //将新生成的对象赋值给等号左边的变量
//-------------------分------------------------------------------------------------------------------------------------行--------------------------------------------

//arguments
 function printMessage(){
     var result = arguments[0]+ arguments[1]+ arguments[2]+ arguments[3]+ arguments[4];
    return result;
}
var flag = printMessage("小俊","正在做","js","函数","练习");
console.log(flag);
//function
function join(p1,p2,p3,p4){
    var  result = p1+p2+p3+p4;
    return result;
}
//对象内的函数叫方法
var student = {
    name:"小明",
    gender:"男",
    height:"185cm",
    age:18,
    eat:function(food){
        return this.name+"正在吃"+food;
    }
}
var result = student.eat("香蕉");
console.log(result);
student.name = "小安";
console.log(student.eat("菠萝"));
function outPut(name,age){
    var result = join(name,",",age,",");
    var hello = "hello";
    var resoult = hello + ":"+name +",我今年"+age+"岁";
    console.log(result);
}
outPut("angelababy",16);


