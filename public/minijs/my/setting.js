var circle=document.getElementsByClassName("circle")[0];circle.onclick=function(){var e=circle.getAttribute("class");"circle"===e?this.setAttribute("class","active"):this.setAttribute("class","circle")};var cache=document.getElementById("caches"),count=document.getElementsByClassName("count")[0],hid=document.getElementsByClassName("hid"),cancel=document.getElementsByClassName("btn1"),confirm=document.getElementsByClassName("btn2");cache.onclick=function(){hid[0].style.display="block"},cancel[0].onclick=function(){hid[0].style.display="none"},confirm[0].onclick=function(){hid[0].style.display="none",count.innerText=0};var outLogin=document.getElementsByClassName("outLogin")[0];outLogin.onclick=function(){hid[1].style.display="block"},cancel[1].onclick=function(){hid[1].style.display="none"},confirm[1].onclick=function(){hid[1].style.display="none",location.href="outlogin.html"};