window.onload = function(){
	setTimeout(function(){
		location.href = './index/index.html'
	},2000)

};
/*
$("#send").on("click",function(){
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
			console.log('result',result);
			if(result.code==1){
				alert("登录成功")
			}else{
				alert(result.msg);
			}
		}
	});
});*/
