/**
 * Created by lenovo on 2017/4/7.
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
var User = sequelize.define(
    "userinfo",
    {
   id:{
   type:Sequelize.STRING,
       primaryKey:true
   },
    userName:{
       type:Sequelize.STRING,
        field:'userName'
    },
    password:{
       type:Sequelize.STRING
    },
    email:{
       type:Sequelize.STRING
    },
    phoneNumber:{
       type:Sequelize.STRING,
        fild:"phoneNumber"
    },
    nickName:{
      type:Sequelize.STRING
    },
    realName:{
      type:Sequelize.STRING
    },
    gender:{
       type:Sequelize.INTEGER
    },
    age:{
      type:Sequelize.INTEGER
    },
    qq:{
   type:Sequelize.STRING
    },
    remark:{
       type:Sequelize.STRING
    }
},
    {
    freezeTableName:true
    }
);
exports.createUser = function () {
    return User.sync().then(function () {                    //sync():同步
        return User.create({
            id:"id" + Math.random(),
            userName:'Hancock',
            password:'a121212'
        });
    });
};
exports.getUser = function () {
    return User.findAll();
};