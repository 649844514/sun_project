/*publish*/
var $publish = $(".publish");
var $f3 = $(".f3");
var $closepub = $(".bottom");
$f3.on("tap",function(){
	$publish.show()
});
$closepub.on("tap",function(){
	$publish.hide()
});