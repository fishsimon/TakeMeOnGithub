/**
 * Created by Administrator on 2017/3/27 0027.
 */
                //转换
//字符串与数字
    //显示转换
var str = "8888";
var num8 = Number(str);
var numParse = parseInt(str);
var numParseFloat = parseFloat(str);
    //隐式转换
var sumNumber = str-1;
var multiNumber = str*1;
var subNumber = str/1;
   // 非数字字符串转换为数字
var nonNumber = "abc";
var noneNum = Number(nonNumber);
   //字符串类型转换
var numToStr = 666;
var strNumber = String(numToStr);
var name = "刘兵";
var age = 22;
var gender = "男";
var special = "去泰国就变女了";
var comeFrom = "火星";
var source = "我叫" + name +"，我来自"+ comeFrom +"，今年岁"+ age +"，性别"+ gender +"("+ special +")";
//布尔类型转换
var zero = 0;
var emptyStr = "";
var obj = null;
var un123;
var notNumber = NaN;
var zbool = Boolean(zero);
var ebool = Boolean(emptyStr);
var obool = Boolean(obj);
var ubool = Boolean(un123);
var nbool = Boolean(notNumber);
// console.log(zbool);
// console.log(ebool);
// console.log(obool);
// console.log(ubool);
// console.log(nbool);
// console.log(source);
// console.log(strNumber);
// console.log(typeof strNumber);
// console.log(nonNumber);
// console.log(typeof nonNumber);
// console.log(typeof sumNumber);
// console.log(typeof  multiNumber);
// console.log(typeof  subNumber);