/**
 * Created by lenovo on 2017/4/6.
 */
var express = require("express");
var app = express();
var router = express.Router();
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
router.get("/staff",function (req,res){
    var data = {
        message:"successful!",
        contents:[
            {
              name:"lucy",
              age:22,
              sex:"female",
                adress:{
                  countray:"USA",
                    city:"Washington"
                }
            },
            {
                name:"charlie",
                age:24,
                sex:"male",
                adress:{
                    conutray:"England",
                    city:"London"
                }
            }
        ]
    };
    res.json(data);
});
app.use("/",router);
app.use("/",express.static(__dirname));
app.listen(8223);