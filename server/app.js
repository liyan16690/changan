//app.js服务器端
//1、安装node.js 下载并引入第三方模块
//express/express-session/cors/mysql
const express = require("express");
const session = require("express-session");
const cors =  require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parse");
//引入socket.io
//引入路由器
const userRouter = require("./routes/user.js");

//3、创建服务器并设置监听端口
var server = express();
//引入socket.io
server.listen(5050);

//4、处理跨域问题，使用模块cors
//4.1 配置允许跨域访问
//4.2 每个请求是否验证
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8080"],
    credentials:true
}));

//5、配置session,一定要在所有请求之前
server.use(session({
    secret:"128位字符串",        //#安全字符串
    resave:true,                //#每次请求保存数据
    saveUninitialized:true      //#保存初始化数据
}));

//6、配置静态目录
server.use(express.static("public"));
//7、使用中间件body-paraser
server.use(bodyParser.urlencoded({
    extended:false
}))

//8、使用路由器，并挂载,ajax
//form
server.use('/user',userRouter);


