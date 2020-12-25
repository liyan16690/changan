//引入mysql
const mysql=require('mysql')
//创建连接对象
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'ca',
	connectionLimit:20
});
//导出对象
module.exports=pool;
