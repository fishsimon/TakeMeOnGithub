/**
 * Created by lenovo on 2017/4/13.
 */
//变量作用域

//表示变量定义、赋值以及能被访问到的区域
//在es5中一般只有全局作用域和函数作用域

//全局作用域相当于全局变量的属性，程序运行到某作用域之外时，该作用域及变量将会被系统垃圾回收机制清除，此时再访问该作用域中的变量程序就会报错。
// 在浏览器环境中，全局对象是window，在nodejs中全局对象是global。
//声明全局变量
var g="全局变量g";
console.log(window.g);
//声明局部(函数、临时)变量
function fnScope() {
    gFnvar = "函数内部的全局变量"; //在函数内部声明变量时，不使用var，该变量会声明为全局变量。
    var fnVar = "函数变量！";
    console.log(fnVar);
}
fnScope();
//全局作用域访问函数作用域
// console.log(fnVar);
console.log(window.gFnvar);
//变量作用域提升：
//在作用域内部的任意位置声明变量时，该声明语句会被提升到该作用域顶部，并将变量值设为undefined，直到程序运行到声明语句编写的位置时才会被赋真正的值
function scopeImprove() {
    console.log(message);
    var message = "scope improve";
}
scopeImprove();
//面试题【变量作用域提升】
var gOutput = "g out put";
function outPut() {
    console.log(gOutput);   //输出undefined
    var gOutput = "fn out put";
}
outPut();
//
function calculte() {
    var result = 20*"2";
}
var f = calculte();
console.log(f);
//
function outputI() {
    for(var i=0;i<4;i++){
        setTimeout(function () {
            console.log(i);
        },500)
    }
}
outputI();
//
function mathOperate() {
    console.log(1+1+"2");
    console.log("2"+1+1);
    console.log("2"*1+1);
    console.log(1*"2"+1);
    var a=100;
    var b="100";
    console.log(a+b-a);
    console.log(a+b-b);
//因为计算机只能识别二进制，不能精确地表示十进制小数，所以得不到0.2
    console.log(0.3-0.1);
}
mathOperate();
//判断两个浮点数是否相等
function floatEqual() {
    var a = 0.9876543;
    var b = 0.9876542;
    console.log(a == b);
    if((a - b) < 0.0000001){
        console.log("a == b");
    }
}
floatEqual();