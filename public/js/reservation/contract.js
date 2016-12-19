/*取消和上传*/
var $hids = $(".hid");
var $cancel = $("header .cancel");
var $upload = $("header .upload");
var $cancelBtns = $hids.eq(0 ).find(".btn");
var $uploadConfirm = $hids.eq(1).find(".confirms");
$cancel.on("click",function(){
	$hids.eq(0 ).show();
});
$cancelBtns.on("click",function(){
	$hids.eq(0 ).hide();
});
$upload.on("click",function(){
	$hids.eq(1).show();
});
$uploadConfirm.on("click",function(){
	location.href = 'order-details.html';
});


