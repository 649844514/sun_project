/*拨打电话*/
var $phone = $("article .icon-back");
var $phoneBox = $(".hid");
var $btns = $(".hid .btn");
$phone.on("click",function(){
	$phoneBox.show();
});
$btns.on("click",function(){
	$phoneBox.hide();
});











