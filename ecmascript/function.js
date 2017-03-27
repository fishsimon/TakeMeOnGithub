/**
 * Created by Administrator on 2017/3/27 0027.
 */
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


