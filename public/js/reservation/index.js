/*接单*/
var $lis = $(".status");
$lis.on("click",function(){
	$(this ).addClass("active");
	this.innerHTML = "已接单，待反馈";
});

/*跳转详情*/
var $cons = $("section .con");
$cons.on("click",function(){
	location.href = "details.html"
});
/*删除*/
var $section = $("section");
$section.on("swipeLeft",function(){
	var $del = $(this ).find(".del");
	var $in = $(this ).find(".status");
	$del.show();
	$in.hide();
	$(this).css("left","-18%")
});
$section.on("swipeRight",function(){
	var $del = $(this ).find(".del");
	var $in = $(this ).find(".status");
	$del.hide();
	$in.show();
	$(this).css("left","0")
});

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
