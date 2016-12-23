/**
 * Created by Administrator on 2016/12/8.
 */
//引入path内置模块
var path=require('path');
//引入express依赖模块，用来启动静态服务器
var express=require('express');
//引入转发请求插件
var proxy=require('http-proxy-middleware');
//安装shal加密
var sha=require('sha1');
//实例express
var app=express();
//定义通过/api访问的请求，转发到指定路径
app.use('/api',proxy({
	target:'http://guanjp.com:9805',
	changeorigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite:{
		'^/api':'/'
	}
}));
//http:127.0.0.1:9888/api/index
//替换为http://122.10.30.153:9901/index



//定义验证接口
app.use('/weixin',function(req,res){
	//获取get传递数据
	var obj=req.query;
	console.log('weixin',obj);
	//将数据添加到一个数组
	var arr=["zcktask",obj.timestamp,obj.nonce]
	//排序
	arr.sort();
	//拼接字符串，并进行sha1加密
	var str=sha(arr.join(""));
	console.log('sha1 ',str);
	console.log('signature',obj.signature===str);
	//匹配是都是微信请求
	if(obj.signature===str){
		//成功返回echostr随机字符串
		res.send(obj.echostr ).end();
	}else{
		res.send('验证失败' ).end()
	}
});
//指定访问页面的路径
console.log("__dirname",__dirname);
console.log("__filename",__filename);
//拼接物理路径，用来指定虚拟路径的访问（静态页面文件）
var viewsPath=path.join(__dirname,'views');
console.log(viewsPath);
app.use('/',express.static(viewsPath)); //虚拟路径，物理路径

//拼接物理路径，用来指定虚拟路径的访问(静态资源文件)
var publicPath=path.join(__dirname,'public');
//指定访问静态资源文件的路径
app.use('/public',express.static(publicPath));
//定义一个接口
app.get('/login',function(req,res){
	res.send('ha ha ha');
});


//16930.用来启动服务
app.listen(16930,function(){
	console.log('server run at port 16930');
});
//模块导出
module.exports=app;