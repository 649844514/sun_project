/**
 * Created by Administrator on 2016/12/8.
 */
//引入path内置模块
var path=require('path');
//引入express依赖模块，用来启动静态服务器
var express=require('express');
//引入转发请求插件
var proxy=require('http-proxy-middleware');
//实例express
var app=express();


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
	res.send('login');
});


//16930.用来启动服务
app.listen(16930,function(){
	console.log('server run at port 16930');
});
//模块导出
module.exports=app;