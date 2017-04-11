/**
 * Created by lenovo on 2017/4/10.
 */
var Sequelize = require("sequelize");
var baseConf = require("../configurations/database.js");
var mysqlConf = baseConf.mysql;
var sequelize = new Sequelize(
    mysqlConf.database,
    mysqlConf.user,
    mysqlConf.password,
    {
        host:mysqlConf.host,
        port:3306,
        dialect:mysqlConf.dialect,
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        storage:'path/to/database.sqlite'
    });
var overwatch = sequelize.define(
    "overwatch",
    {
        id:{"type":Sequelize.STRING,primaryKey:true},
        hero:{"type":Sequelize.STRING},
        type:{"type":Sequelize.STRING}  ,
        weapon:{"type":Sequelize.STRING},
        gender:{"type":Sequelize.INTEGER}
    },
    {
        freezeTableName:true
    }
);
exports.createoverwatch = function () {
    return overwatch.sync().then(function () {
        return overwatch.create({
            id:"id" + Math.random(),
            hero:'DVA',
            type:'half-tanke（半肉）',
            weapen:'18口径机枪',
            gender:'Girl'
        });
    });
};
exports.getoverwatch = function () {
    return overwatch.findAll();
};