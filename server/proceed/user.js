/**
 * Created by forli on 2017/4/6.
 */
var dbSequelize = require('../sequelize-mysql/data-base');//引入data-base模块，使用sequelize操作数据库
//exports暴露init方法给引用本模块的模块，init方法的作用：使用传递进来的router对象，注册用户相关的操作的路由
exports.init = function(router){
    router.get("/updateUser",function(req,res){ //以get的方式注册跟新用户的路由
        // var uName = req.query.userName;
        // var uEmail = req.query.email;
        // var uMobile = req.query.mobile;
        // var uQQ = req.query.qq;
        // var uRname = req.query.realName;
        // var uAge = req.query.age;
        // var id = req.query.id;
        //创建临时对象userData，接收客户端传递的参数  req.query，接收地址最后的？传递的参数
        var userData = {
            userName:req.query.userName,
            email:req.query.email,
            mobile:req.query.mobile,
            qq:req.query.qq,
            realName:req.query.realName,
            age:req.query.age,
            id:req.query.id
        };
        //判断客户端是否传递userid，如果传递了，表示是数据库已存在该用户的信息，要去更新这条数据。如果没传，表示要在数据库新建一条数据
        if(userData.id){
            // 修改已存在的用户数据
            dbSequelize.updateUser(userData).then(function (r) { //更新数据操作是由nodejs发起的请求，由数据库执行。当数据库执行完成后，会通过then方法传递的函数来告诉nodejs数据库更新完成。返回的数据由r参数传递。
                res.json({
                    flag:0,
                    message:"",
                    contents:[]
                });
            });
            }
        //新增用户数据
            else{
            dbSequelize.createUser(userData).then(function(r){
                var result = {
                    id:r.dataValues.id,
                    userName:r.dataValues.userName,
                    age:r.dataValues.age,
                    email:r.dataValues.email,
                    phoneNumber:r.dataValues.phoneNumber,
                    realName:r.dataValues.realName,
                    qq:r.dataValues.qq,
                    createAt:r.dataValues.createdAt,
                    updateAt:r.dataValues.updatedAt
                };
                res.json(result);
            });
        }
    });

    // router.post("/updateUser",function(req,res){
    //     dbSequelize.createUser().then(function(r){
    //         var result = {
    //             id:r.dataValues.id,
    //             userName:r.dataValues.userName,
    //             age:r.dataValues.age,
    //             createAt:r.dataValues.createdAt,
    //             updateAt:r.dataValues.updatedAt
    //         };
    //         res.json(result);
    //     });
    // });

    router.get("/findUser",function(req,res){  //
        var pIndex = req.query.pageIndex;
        var pSize = req.query.pageSize;
        pIndex = Number(pIndex);
        pSize = Number(pSize);
        console.log(pIndex + "is page index");
        dbSequelize.getUser().then(function(r){
            var result = {
                status:0,
                message:"",
                contents:[],
                total:r.length
            };
            var start = 0;
            var end = 0;
            start = pIndex * pSize;
            end = start + pSize;
            if(end>r.length){
                end = r.length
            }
            for(var i = start;i<end;i++){
                var rTemp = r[i];
                var data = {
                    id:rTemp.dataValues.id,
                    userName:rTemp.dataValues.userName,
                    age:rTemp.dataValues.age,
                    email:rTemp.dataValues.email,
                    phoneNumber:rTemp.dataValues.phoneNumber,
                    realName:rTemp.dataValues.realName,
                    qq:rTemp.dataValues.qq,
                    createAt:rTemp.dataValues.createdAt,
                    updateAt:rTemp.dataValues.updatedAt
                };
                result.contents.push(data);
            }
            // r.forEach(function(rTemp){
            //     var data = {
            //         id:rTemp.dataValues.id,
            //         userName:rTemp.dataValues.userName,
            //         createAt:rTemp.dataValues.createdAt,
            //         updateAt:rTemp.dataValues.updatedAt
            //     };
            //     result.contents.push(data);
            // });
            res.json(result);
        });
    });

};