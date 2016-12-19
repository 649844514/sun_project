var sf = document.getElementById("sf");
sf.onchange = function(){
	var url =this.options[this.selectedIndex].value;
	if (url != "") {
		open(url,'_self');
		this.selectedIndex=0;
		this.blur();
	}
};
setInterval(test,1000);
function test(){
	var name=document.getElementById("names" ).value;
	var password = document.getElementById("psd" ).value;
	var password2 = document.getElementById("psd2" ).value;
	var mark =  document.getElementById("mark" ).value;
	var register = document.getElementsByClassName("register")[0];
	var registerClass =register.getAttribute("class");
	if(name =="" || password ==""||password2 ==""||mark ==""){
		registerClass = registerClass.replace("active","");
		register.setAttribute("class",registerClass );
	}else{
		registerClass = registerClass.concat(" active");
		register.setAttribute("class","register active" );
		register.onclick=function(){
			location.href = 'register-success.html';
		};
	}
}
var wait=60;
function time(o){
	if (wait==0) {
		o.removeAttribute("disabled");
		o.innerHTML="输入验证码";
		o.style.backgroundColor="#fe9900";
		wait=60;
	}else{
		o.setAttribute("disabled", true);
		o.innerHTML=wait+"s后重新获取";
		o.style.backgroundColor="#8f8b8b";
		wait--;
		setTimeout(function(){
			time(o)
		},1000)
	}
}
document.getElementsByClassName("btn_mark")[0].onclick=function(){
	time(this)
};