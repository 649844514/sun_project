for(var tips=document.getElementsByClassName("tips"),hid=document.getElementsByClassName("hid")[0],hidden=document.getElementsByClassName("hidden")[0],cancel=document.getElementById("cancel"),inputs=document.querySelectorAll("input[type=text]"),j=0;j<inputs.length;j++)inputs[j].onclick=function(){this.parentNode.setAttribute("class","active")},inputs[j].onblur=function(){this.parentNode.setAttribute("class","")};for(var i=0;i<tips.length;i++)tips[i].onclick=function(){hid.style.display="block",hidden.style.display="block"};cancel.onclick=function(){hid.style.display="none",hidden.style.display="none"};