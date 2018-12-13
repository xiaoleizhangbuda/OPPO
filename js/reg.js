function $(str){//#box .cls  p
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
window.onload=function(){
	$("#checkMa").onclick=function(){
		var arr=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		var n=4;
		$("#checkMa").innerHTML=checkMa(arr,n);
	}
	$("#username").onblur=function(){
		let xml =new XMLHttpRequest();
		xml.open("get","../php/reg.php?username="+this.value,true);
		xml.onreadystatechange=function(){
			if (xml.readyState==4 && xml.status==200) {
				if (xml.responseText=="0") {
					$("#userspan").style.color="green";
					$("#userspan").innerHTML="该用户名可以使用";
				}else{
					$("#userspan").style.color="red";
					$("#userspan").innerHTML="该用户名已经被使用";
				}
			}
		}
		xml.send();
	}
}
function checkMa(arr,n){
	var str="";
	for(var i=0;i<n;i++){
		 str+=arr[parseInt(Math.random()*arr.length)];
	}
	return str;
}
// //验证用户名
// function checkPhone(){
// 	$("#username").onblur = function(){
// 		//1、手机号码的规则：1开头，第二位是3-9，9位数字
// 		let reg = /^1[3-9]\d{9}$/i;
// 		if(reg.test(this.value)){
// 			this.nextElementSibling.innerHTML = "√ 号码合法";
// 			this.nextElementSibling.style.color="green";
// 			this.nextElementSibling.style.fontSize="14px";
// 			this.style.border="1px solid #e0e0e0";
// 			return true;
// 		}else{
// 			this.nextElementSibling.innerHTML = "请输入正确的手机号码";
// 			this.nextElementSibling.style.color="red";
// 			this.style.border="1px solid red";
// 			this.nextElementSibling.style.fontSize="14px";
// 			return false;
// 		}
// 	}
// }
// //验证密码
// function checkPassword(){
// 	$("#userpass").onblur = function(){
// 		//密码由6-20位数字,字母和符号组成
// 		let reg = /\w{6,20}/;	
// 		if(reg.test(this.value)){
// 			this.nextElementSibling.innerHTML = "√  密码合法";
// 			this.nextElementSibling.style.color="green";
// 			this.nextElementSibling.style.fontSize="14px";
// 			this.style.border="1px solid #e0e0e0";
// 			return true;
// 		}else{
// 			this.nextElementSibling.innerHTML = "请输入正确的密码";
// 			this.style.border="1px solid red";
// 			this.nextElementSibling.style.color="red";
// 			this.nextElementSibling.style.fontSize="14px";
// 			return false;
// 		}
// 	}
// }

