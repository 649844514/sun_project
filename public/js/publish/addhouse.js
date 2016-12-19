var　$hid = $(".hid");
var $confirm = $(".confirm");
var $confirms = $(".hid .confirms");
$confirm.on("tap",function(){
	$hid.show()
});
$confirms.on("tap",function(){
	$hid.hide();
});
