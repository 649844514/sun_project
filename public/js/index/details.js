/*收藏*/
var $collect = $(".banner .icon-collect");
$collect.on("click",function(){
	var $self = $(this );
	if($self.hasClass("active")){
		$self.removeClass("active");
	}else{
		$self.addClass("active");
	}
});