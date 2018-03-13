app.controller('registerCtr', function($scope,$http,$location) {

 var arr=[];
//正则规范
	var tel = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	var pword = /^\w{6,12}$/;

	//聚焦，失去焦点的设置
	$('.container ul li input').focus(function(){
		$(this).css("border",0);
		$(this).siblings('#wrong').css('display','none');	
		$(this).siblings('strong').css('display','none');	
	})
	$('.container ul li input').blur(function(){
		if(tag(this).find('input').val()==''){
			tag(this).find('#wrong').css('display','block');
		
		}
	})
	
//手机号部分
	$('.container #phone input').blur(function(){
		if($(this).val()!=''){
			if(tel.test($('#phone #txt').val())){
				$('.container #phone strong').css('display','block');
				arr[0]=1;
			}else{
				$('.container #phone #wrong').css('display','block');			
			}
		}
	})
	
//密码、确认密码部分
	$('.container #psword input').blur(function(){
		if($(this).val()!=''){
			if(pword.test($('#psword #psw').val())){
				$('.container #psword strong').css('display','block');
				arr[1]=1;
			}else{
				$('.container #psword #wrong').css('display','block');
				
			}
		}
	})
	$('.container #re input').blur(function(){	
		if($(this).val()!=''){
			
			if($('#psword #psw').val()!='' && $(this).val()==$('#psword #psw').val()){
				$('.container #re strong').css('display','block');
				arr[2]=1
			}else{
				$('.container #re #wrong').css('display','block');
				
			}
		}
	})

//验证码部分
	//创建初始验证码
		var str = '';
		for (var i=0; i<4; i++){            //长度为4
			var num = Math.floor(Math.random()*75+48);   //生成一个48到122之间的一个随机数
			if(num <= 57 || (num >= 65 && num <= 90) || num >=97){ 
				var code = String.fromCharCode(num);     //将对应的ACSII码转换成字符
				str += code;		
			}else{
				i--;
			}   
		}
		$('#yzm em').html(str);   //将str里的内容放到em中
	//点击时刷新验证码
		var rotateZ = 0;
		$('#yzm img').click(function(){
			rotateZ += 360;
			$(this).animate({'transform':'rotateZ('+rotateZ+'deg)'},500);
			var str = '';
				for (var i=0; i<4; i++){  //长度为4
				var num = Math.floor(Math.random()*(122-48+1)+48);   //生成一个48到122之间的一个随机数
				if (num <= 57 || (num >= 65 && num <= 90) || num >=97){
					var code = String.fromCharCode(num);
					str += code;		
				}else{
					i--;
				}   
			}
			$('#yzm em').html(str);   //将str里的内容放到em中
		 })
		
	//失去焦点后判断
	$('.container #yzm input').blur(function(){
		if($(this).val()!=''){
			if($(this).val()==$('#yzm em').html()){
				$('.container #yzm strong').css('display','block');
				arr[3]=1;
			}else{
				$('.container #yzm #wrong').css('display','block');
				
			}
		}
	})
	
	
//注册按钮提交
    var pHone = document.getElementById('txt');
    var psword = document.getElementById('psw');
	$('.container #sub').on('tap',function(){
		//若input内容是否为空
		if($('.container ul li input').val()==''){
			$('.container ul li #wrong').css('display','block');
			$('.container ul li input').css('border','1px solid #F53030');
			alert('输入信息有误，请重新输入')
		}else{
			// input中的内容正确记为1并推入到数组中
			var n=0;
			for(var i=0;i<arr.length;i++){
				if(arr[i]==1){
					n++;
				}
			}
			//代表信息均正确
			if(n==4){
				var pword1 = localStorage.getItem('pword');
				var phone1 = localStorage.getItem('phone');  
				//判断号码是否已注册
				if(pHone.value==phone1){
					alert('此号码已注册,请更换号码');
					//自动聚焦到手机框
					$('.container #phone input').eq(0).focus();
				}
			    else{
					alert('注册成功,可直接登录');
					localStorage.setItem('phone', pHone.value);
					localStorage.setItem('pword', psword.value);
					$scope.location=function() {    //改变location地址；
						alert(1)
					    location.href='#/login';
					}
				}
			}else{
				alert('请将信息填写完整');
			}			
		}
	})
	// var pword1 = localStorage.getItem('pword');
	// var phone1 = localStorage.getItem('phone');  
	// //判断号码是否已注册
	// if(pHone.value==phone1){
	// 	alert('此号码已注册,请直接登录');
	// 	$scope.location=function() {    //此方法可以改变location地址；
	// 		alert(2);
	// 	    location.href='#/login';
	// 	}
	// }
 //    else if(psword.value != '' && pHone.value != ''&& $('.container ul li input').val()!=''&& tel.test($('#phone #txt').val())&&pword.test($('#psword #psw').val())&&$('#psword #psw').val()!='' && $('.container #re input').val()==$('#psword #psw').val()&&$('.container #yzm input').val()==$('#yzm em').html()){
	// 			alert('注册成功,可直接登录');
	// 			localStorage.setItem('phone', pHone.value);
	// 			localStorage.setItem('pword', psword.value);
	// 			$scope.location=function() {    //此方法可以改变location地址；
	// 				alert(1)
	// 			    location.href='#/login';
	// 			}
	// }
})
