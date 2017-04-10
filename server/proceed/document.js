/**
 * Created by lenovo on 2017/4/10.
 */
var dbSequelize = require('../sequelize-mysql/data-base');
exports.init = function(router) {
    router.get("/updateDocument", function (req, res) {
        dbSequelize.createDocument().then(function (r) {
            var result = {
                id: r.dataValues.id,
                title: r.dataValues.title,
                type:r.dataValues.type,
                content:r.dataValues.content,
                author :r.dataValues.author ,
                avator :r.dataValues.avator ,
                createAt: r.dataValues.createdAt,
                updateAt: r.dataValues.updatedAt
            };
            res.json(result);
        });
    });
    router.post("/updateDocument", function (req, res) {
        dbSequelize.createDocument().then(function (r) {
            var result = {
                id: r.dataValues.id,
                title: r.dataValues.title,
                type:r.dataValues.type,
                content:r.dataValues.content,
                author :r.dataValues.author ,
                avator :r.dataValues.avator ,
                createAt: r.dataValues.createdAt,
                updateAt: r.dataValues.updatedAt
            };
            res.json(result);
        });
    });

    router.get("/findDocument", function (req, res) {
        dbSequelize.getDocument().then(function (r) {
            var result = {
                status: 0,
                message: "",
                contents: []
            };
            r.forEach(function (rTemp) {
                var data = {
                    id: rTemp.dataValues.id,
                    title: rTemp.dataValues.title,
                    type:rTemp.dataValues.type,
                    content:rTemp.dataValues.content,
                    author :rTemp.dataValues.author ,
                    avator :rTemp.dataValues.avator ,
                    createAt: rTemp.dataValues.createdAt,
                    updateAt: rTemp.dataValues.updatedAt
                };
                result.contents.push(data);
            });
            res.json(result);
        });
    });
};