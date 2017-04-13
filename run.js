/**
 * Created by lenovo on 2017/4/6.
 */
 var express = require("express"); //引用express框架模块，将其内部的exports赋值给exports变量。
var app = express();//调用express方法，将返回值赋值给app变量。
var router = express.Router();//调用express的Router方法，将返回值赋给router变量

//调用express的Router的get方法，注册“/students”路由。
//路由就是根据客户端的访问地址，找到相应的服务器端资源，响应给客户端。
//因为是get，所以该动态资源可以在浏览器的地址栏。
//访问，HTTP://localhost:8123/students.
//也可以使用XMLHttpRequest("get:,:/students")访问

// router.get("/students",function (req,res) {
// //    req就是request    http客户端请求对象
// //    包括了客户端信息（IP），操作系统，版本
// //    软件信息（浏览器，http客户端等）
// //    还包括客户端请求传递的数据
//
// //    res就是response  表示服务器端根据客户传递的参数，组织的服务器端数据响应给客户端
// //     res.write("你好，我是学生数据！");
// //     res.end();
//     var data = {
//         message:"获取数据称成功",
//         contents:[
//             {
//                 name:"赵川",
//                 gender:"男",
//                 age:18,
//                 address:{
//                     province:"四川",
//                     city:"德阳",
//                     district:"罗江",
//                     countray:"金山"
//                 },
//                 favorites:["篮球","足球","跳舞","妹子","唱歌","作死"]
//             },
//             {
//                 name:"李锦妻",
//                 gender:"男",
//                 age:18,
//                 address:{
//                     province:"四川",
//                     city:"南充",
//                     distrct:"仪陇",
//                     countray:"复兴"
//                 }
//             },
//             {
//                 name:"刘兵",
//                 gender:"男",
//                 age:18,
//                 address:{
//                     province:"四川",
//                     city:"宜宾",
//                     distrct:"山卡卡",
//                     countray:"兴文"
//                 }
//             }
//         ]
//     };
//     res.json(data);
// });
// router.get("/staff",function (req,res){
//     var data = {
//         message:"successful!",
//         contents:[
//             {
//               name:"lucy",
//               age:22,
//               sex:"female",
//                 adress:{
//                   countray:"USA",
//                     city:"Washington"
//                 }
//             },
//             {
//                 name:"charlie",
//                 age:24,
//                 sex:"male",
//                 adress:{
//                     conutray:"England",
//                     city:"London"
//                 }
//             }
//         ]
//     };
//     res.json(data);
// });
router.get("/students",function (req,res) {
});//将动态资源的路径设置为静态资源路径可以将动态资源伪装为静态资源。
router.get("/user/details.html",function (req,res) {
    var result = "<div><h1>服务器端html字符串</h1></div>";
    res.setHeader('Content-Type','text/html;charset=UTF-8');//设置服务器端响应内容的类型  UTF-8:亚洲文字编码
    res.write(result);
    res.end();       //关闭本次http连接。
//    res.json();
});
var userDb = require('./server/proceed/user');//引入自定义user模块，将其exports对象赋值给userDb模块
userDb.init(router);

var documentDb = require('./server/proceed/document');
documentDb.init(router);
var overwatch = require('./server/proceed/exercise');
overwatch.init(router);

app.use("/",router);
app.use("/",express.static(__dirname));
app.listen(8223);