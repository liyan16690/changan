SET NAMES UTF8;
DROP DATABASE IF EXISTS ca;
CREATE DATABASE ca CHARSET=UTF8;
USE ca;


/**车型号家族**/
CREATE TABLE ca_che_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**车**/
CREATE TABLE ca_che(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  price_max DECIMAL(10,2),        #高价格
  price_min DECIMAL(10,2),        #高价格
  engine DECIMAL(2,1),            #发动机
  lay SMALLINT,     #变速器
  nj SMALLINT,     #扭矩
  gl SMALLINT,    #功率
  rxl SMALLINT,    #热效率
  imgUrl VARCHAR(128)    #图片地址
);

/**用户信息**/
CREATE TABLE xz_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
);

/**收货地址信息**/
CREATE TABLE xz_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名

  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE xz_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE xz_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE xz_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/*******************/
/******数据导入******/
/*******************/
/**笔记本电脑型号家族**/
/**车型号家族**/
INSERT INTO ca_che_family VALUES
(NULL,'UNI'),
(NULL,'轿车'),
(NULL,'SUV'),
(NULL,'MVP'),
(NULL,'新能源');

/**车**/
INSERT INTO ca_che VALUES
(1,1,'UNI-T',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car01.png'),
(NULl,2,'第二代逸动',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car02.png'),
(NULl,2,'新CS75',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car03.png'),
(NULl,2,'锐程CC',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car04.png'),
(NULl,2,'睿骋CC',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car05.png'),
(NULl,2,'第三代悦翔',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car06.png'),
(NULl,3,'凌轩',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car07.png'),
(NULl,3,'经典CS35',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car08.png'),
(NULl,3,'新逸动EV300',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car09.png'),
(NULl,3,'睿骋',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car10.png'),
(NULl,3,'cs55ev',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car12.png'),
(NULl,3,'新逸动XT',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car13.png'),
(NULl,3,'逸动PLUS',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car14.png'),
(NULl,3,'cs75',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car15.png'),
(NULl,3,'新奔奔EC300',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car16.png'),
(NULl,4,'CS75PLUS',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car17.png'),
(NULl,4,'全新cs95',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car18.png'),
(NULl,4,'全新CS15',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car19.png'),
(NULl,5,'CS35PLUS',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car20.png'),
(NULl,5,'CS75PHEV',13.39,11.39,1.5,7,300,132,40,'../assets/img/car/car21.png');

/**用户信息**/
INSERT INTO xz_user VALUES
(NULL, 'dingding', '123456', '13501234567','丁伟', '1'),
(NULL, 'dangdang', '123456','13501234568','林当', '1'),
(NULL, 'doudou', '123456', '13501234569','窦志强', '1'),
(NULL, 'yaya', '123456', '13501234560','秦小雅', '0');