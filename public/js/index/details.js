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
var section = $("article section" );
section.each(function(){
	var index = $(this).index();
	if(index%2 != 0){
		$(this ).css("backgroundColor","#efeff4");
	}
})
