/*取消发布*/
var　$hid = $(".hid");
var $cancel = $(".cancel");
var $publish = $(".publish");
var $btn1 = $(".hid .btn1");
var $btn2 = $(".hid .btn2");
var $confirm = $(".hid .confirm");
$cancel.on("tap",function(){
	$hid.eq(0 ).show()
});
$publish.on("tap",function(){
	$hid.eq(1 ).show()
});
$btn1.on("tap",function(){
	$hid.eq(0).hide();
});
$btn2.on("tap",function(){
	location.href='../index/index.html'
});
$confirm.on("tap",function(){
	location.href='../my/demand.html'
});