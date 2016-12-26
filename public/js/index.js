window.onload = function(){
	setTimeout(function(){
		location.href = './index/index.html'
	},2000)

};
/*$("#send").on("tap",function(){
	var username = $("#user" ).val();
	var passwd = $("#passwd" ).val();
	$.ajax({
		url:'/api/user/login',
		type:'POST',
		dataType:'json',
		data:{
			username:username,
			passwd:passwd
		},
		success:function(result){
			if(result.code==1){
				location.href = './index/index.html'
			}else{
				console.log(result.msg);
			}
		}
	});
});*/
