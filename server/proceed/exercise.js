/**
 * Created by lenovo on 2017/4/10.
 */
var dbSequelize = require('../sequelize-mysql/data-exercise');
exports.init = function (router) {
    router.get("/updateoverwatch",function (req,res) {
        dbSequelize.createoverwatch().then(function (r) {
            var result = {
                id:r.dataValues.id,
                hero:r.dataValues.hero,
                type:r.dataValues.type,
                weapen:r.dataValues.weapen,
                gender:r.dataValues.gender
            };
            result.send();
        });
    });
    router.post("/updateoverwatch",function(){
        dbSequelize.createOverwatch().then(function (r) {
            var result = {
                id:r.dataValues.id,
                hero:r.dataValues.hero,
                type:r.dataValues.type,
                weapen:r.dataValues.weapen,
                gender:r.dataValues.gender
            };
            result.send();
        });
    });
    router.get("/findoverwatch",function (req,res) {
        dbSequelize.getoverwatch().then(function (r) {
            var result = {
                status:0,
                message:"",
                contents:[]
            };
            r.forEach(function (rk) {
                var data = {
                    id:rk.dataValues.id,
                    hero:rk.dataValues.hero,
                    type:rk.dataValues.type,
                    weapen:rk.dataValues.weapen,
                    gender:rk.dataValues.gender
                };
                result.contents.push(data);
            });
            res.json(result);
        });
    });
};