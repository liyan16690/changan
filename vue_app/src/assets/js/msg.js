
    //msg.js
  //msg.js  完成弹幕功能文件
  //1:创建弹幕构造函数        保存弹幕数据
  var msgObj = function(){
    this.m = [];    //1.1:弹幕中显示文字
    this.x = [];    //1.2:弹幕坐标x
    this.y = [];    //1.3:弹幕坐标y
    this.spd = [];  //1.4:弹幕移动速度
    this.font = []; //1.5:弹幕文字大小
    this.color = [];//1.6:弹幕中文字颜色
    //1.7:弹幕状态 true 显示 false 隐藏
    this.alive = [];
  }
  msgObj.prototype.num = 100; // 弹幕数量

  //2:为构造函数添加方法init  为弹幕数据初始赋值
  msgObj.prototype.init = function(){
    //2.1:创建循环遍历数组中元素
    for(var i=0;i<this.num;i++){
      //2.2:初始化x 在画布最侧 856 !!!
      this.x[i] = canWidth;
      //2.3:初始化y 临时100  11:40
      this.y[i] = 0;
      //2.4:初始化m  临时 ""
      this.m[i] = "";
      //2.5:初始化font 12px
      this.font[i] = "12px";
      //2.6:初始化color #000
      this.color[i] = "#000";
      //2.7:初始化spd   3
      this.spd[i] = 3;
      //2.8:初始化alive 临时true 后面false
      this.alive[i] = false;
    }//for end
  }
  //3:为构造函数添加方法draw  将数据绘制网页中
  msgObj.prototype.draw = function(){
    //3.0:清除画布 
    ctx.clearRect(0,0,canWidth,canHeight);
    //3.1:创建循环遍历所有弹幕
    for(var i=0;i<this.num;i++){
      //3.2:判断alive==true 绘制
      if(this.alive[i]){
        //3.3:获取当前弹幕内容 m
        var m = this.m[i];
        //3.4:获取当前弹幕颜色
        var c = this.color[i];
        //3.5:获取当前弹幕文字大小
        var f = this.font[i];
        //3.6:获取当前弹幕速度 3
        var spd = this.spd[i];
        //3.7:修改当前弹幕 x -= 3
        this.x[i]-=spd;
        //3.8:修改当前弹幕文字大小
        ctx.font = f +" SimHei";
        //3.9:修改当前弹幕颜色
        ctx.fillStyle = c;
        //3.10:绘制实心文字
        ctx.fillText(m,this.x[i],this.y[i]);
        //3.11:判断弹幕中文字是否移动出屏幕
        if(this.x[i]<0){//???
          //3.12:修改状态false
          this.alive[i] = false;
          //3.13:修改x:等待一次使用
          this.x[i] = canWidth;
        }
      }//end if alive 
    }
  }

  //index.html 用户输入内容,如果用户点击发送按钮
  //将文字/颜色/文字
  //将内容显示画布

  //接收三个数据(文字/颜色/大小) 
  //m = {m:"666",color:"red",font:"22px"}
  //4:为构造函数添加方法add   
  //将新弹幕添加弹幕池中  100 false
  msgObj.prototype.add = function(m){
  //功能:挑选一个状态为false弹幕,将文字内容
  //     大小,颜色赋值
  //    挑选从头开始按顺序找到第一个false元素
  //    将他它true 
  //1:创建循环遍历数组元素
  for(var i=0;i<this.num;i++){
    //2:查找到第一个为false元素
    if(this.alive[i]==false){  //隐藏
    //3:将修改状态 true
    this.alive[i] = true;
    //4:分配文字大小
    this.font[i] ='20px';
    //5:分配文字颜色
    this.color[i] ='#fff'; 
    //6:生新分配y
    this.y[i] = Math.random() * canHeight;
    //7:分配随机速度
    this.spd[i] = 1 + Math.random()*3;
    //8:分配显示文字
    this.m[i] = m.msg; 
    //9:return 一次挑一个
    return;
    }//if end
  }//for end
  }
