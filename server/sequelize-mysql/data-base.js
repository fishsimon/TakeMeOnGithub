/**
 * Created by lenovo on 2017/4/7.
 */
//引入数据库配置，比如数据库主机、端口号、名、类型、最大连接池，每个连接池的最大连接数，登陆用户名，密码
var Sequelize = require("sequelize");
var baseConf = require("../configurations/database.js");
var mysqlConf = baseConf.mysql;
//调用sequelize函数，设置数据库主机等信息
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
//创建与数据库中数据表对应的ORM（Object Relational Mapping  对象关系映射）对象
var User = sequelize.define(
    //sequelize.define方法 第一个参数：数据库表名， 数据类型：string
    "userinfo",
    //第二个参数：数据表字段的定义，数据类型：objec
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
    //第三个参数：同步数据表的行为操作   数据类型：object
    {
    freezeTableName:true  //默认为false，修改表名为复数，true不修改表名，与数据库表名一致
    }
);
var document = sequelize.define(
  "document",
    {
      id:{"type":Sequelize.STRING,primaryKey:true},
      title:{"type":Sequelize.STRING},
      type:{"type":Sequelize.STRING}  ,
      content:{"type":Sequelize.STRING},
      author:{"type":Sequelize.STRING},
      avator:{"type":Sequelize.STRING},
      remark:{type:Sequelize.STRING}
    },
    {
        freezeTableName:true
    }
);
exports.createUser = function (user) {
    return User.sync().then(function () {                    //sync():同步
        return User.create({
            id:"id" + Math.random(),
            userName:user.userName,
            password:'a121212',
            email:user.email,
            phoneNumber:user.mobile,
            realName:user.realName,
            age:user.age,
            qq:user.qq
        });
    });
};
exports.updateUser = function (user) {
    if(!user.id) return;
    return User.sync().then(function () {
       return User.update({
            userName:user.userName,
               email:user.email,
               phoneNumber:user.mobile,
               realName:user.realName,
               age:user.age,
               qq:user.qq
            },
            {
                where:{
                    id:user.id
                }
        });
    });
};
exports.createDocument = function () {
    return document.sync().then(function () {
        return document.create({
            id:"id" + Math.random(),
            title:'美丽的新中国',
            type:'0',
            content:'我爱中华',
            author:'B哥'
        });
    });
};
exports.getUser = function () {
    return User.findAll();
};
exports.getDocument = function () {
    return document.findAll();
};