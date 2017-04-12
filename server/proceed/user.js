/**
 * Created by forli on 2017/4/6.
 */
var dbSequelize = require('../sequelize-mysql/data-base');
exports.init = function(router){
    router.get("/updateUser",function(req,res){
        // var uName = req.query.userName;
        // var uEmail = req.query.email;
        // var uMobile = req.query.mobile;
        // var uQQ = req.query.qq;
        // var uRname = req.query.realName;
        // var uAge = req.query.age;
        // var id = req.query.id;
        var userData = {
            userName:req.query.userName,
            email:req.query.email,
            mobile:req.query.mobile,
            qq:req.query.qq,
            realName:req.query.realName,
            age:req.query.age,
            id:req.query.id
        };
        if(userData.id){
            dbSequelize.updateUser(userData).then(function (r) {
                res.json({
                    flag:0,
                    message:"",
                    contents:[]
                });
            })
            }else{
            dbSequelize.createUser().then(function(r){
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

    router.get("/findUser",function(req,res){
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