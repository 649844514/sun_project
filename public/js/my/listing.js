/*del*/
$list = $(".list");
$list.on("swipeLeft",function(){
	var $del = $(this ).find(".del");
	$del.show();
});
$list.on("swipeRight",function(){
	var $del = $(this ).find(".del");
	$del.hide();
});