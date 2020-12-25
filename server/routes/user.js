//引入express
const express=require('express')
const pool=require('../pool.js')
//引入数据库连接对象

//创建路由器
var router=express.Router();

//1.1添加登陆路由
router.post('/login',function(req,res){
	var obj=req.body;
	console.log(obj);
	pool.query('select * from xz_user where uname=? and upwd=? or phone=?',[obj.uname,obj.upwd,obj.phone],function(err,result){
		if(err) throw err;
		if(result.length>0){
			//登录成功result=[{id:2}]
			var id=result[0].uid;
			req.session.uid=id;
			console.log(result[0])
			res.send({code:1,data:result[0]});
		}else{
			res.send({code:0})
		}
	});
})
//1.2注册路由
router.post('/regin',function(req,res){
	var obj=req.body;
	console.log(req.body);
	pool.query('insert into xz_user set ?',[obj],function(err,result){
		if (err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:200,msg:"reg success"})
		}else{
			res.send({code:400,msg:"reg lose"})
		}
	})
})
//1.2.2注册验证手机号是否注册--无
router.post('/testPhone',function(req,res){
	var obj=req.body;
	pool.query('select uid from xz_user where phone=?',[obj.phone],function(err,result){
		if(err) throw err;
		console.log(result)
		if(result.length>0){
			res.send({code:1})
		}else{
			res.send({code:0})
		}
	})
})
//1.3 请求汽车列表
router.get('/list',function(req,res){
	pool.query('select * from ca_che',function(err,result){
		if (err) throw err
		console.log(result);
		if(result.length>0){
			res.send({code:200,data:result})
		}else{
			res.send({code:400,msg:"list lose"})
		}
	})
})
//1.3 请求汽车列表分页面--无
router.get('/finance',function(req,res){
		var obj=req.query;
		pool.query('select * from xz_user limit ?,?',[start,count],function(err,result){
			if (err) throw err
			console.log(result);
			if(result.length>0){
				res.send({code:200,msg:"list seccess"})
			}else{
				res.send({code:400,msg:"list lose"})
			}
		})
})
//1.4检索用户--无
router.get('/detail',function(req,res){
	var obj=req.query;
	console.log(obj);
	pool.query("select * from ca_che where cid=?",[obj.cid],function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send({code:200,data:result[0]});
		}else{
			res.send({code:400,msg:"no find"})
		}
	});
})

//1.5修改用户
router.post('/update',function(req,res){
	var obj=req.body;
	var uid=obj.uid;
	delete obj.uid;
	console.log(obj)
	pool.query('update xz_user set ? where uid=?',[obj,uid],function(err,result){
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:1,data:obj})
		}else{
			res.send({code:0,msg:"update lose"})
		}
	})
});
//1.6删除用户--无
router.get('/delete',function(req,res){
	var obj=req.query;
	if(!obj.uid){
		res.send({code:400,msg:'uid required'})
	}
	pool.query("delete from xz_user where uid=?",[obj.uid],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"delete succes"})
		}else{
			res.send({code:400,msg:"delete lose"})
		}
	})
})

//导出用户模块的路由器对象
module.exports=router;