function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
window.onload = function(){
	$("#btnLogin").onclick=function(){        
		let xml = new XMLHttpRequest();
		xml.open("post","../php/login.php",true);
		xml.onreadystatechange=function(){
			if(xml.readyState==4 && xml.status==200) {
				if (xml.responseText=="0") {
					$("#spanError").style.display="block";
				}
				else{
					addCookie("username",$("#username").value,7);
					location.href="../html/detail.html";
				}
			}
		}
		xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		let sendStr="username="+$("#username").value+"&userpass="+$("#userpass").value;
		xml.send(sendStr);
	}
}