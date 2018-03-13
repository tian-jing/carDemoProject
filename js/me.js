app.directive('meFinish', function() {
    return {
        link: function(scope, element, attr) {
            if (localStorage.getItem('userName')) {
                $('.me-profile dd h4').text(localStorage.getItem('userName'))
            };
        }
    }
})

app.directive('loginRepeatFinish', function() {
    return {
        link: function(scope, element, attr) {
            tag('.login-submit').on('tap', function() {
                var name=localStorage.getItem('userName')
                var psw=localStorage.getItem('psw')
                if(tag('.login-name').val()==name&&tag('.login-psw').val()==psw){
                    window.location.href="index.html#/me"
                    alert('成功')
                }else{
                    alert('用户名或者密码错误')
                }
            })
        }
    }
})  
app.controller('seCtr',function(){
    
})
app.directive('setrepeatFinish', function() {
    return {
        link: function(scope, element, attr) {
            var nameReg = /\w{4,20}/;
            var pswReg = /\w{6,25}/;
            $('.complete-submit').on('tap', function() {
                var psw = tag('.au-code .userPsw').val()
                var userName = tag('.au-code .userPsw').val()
                console.log(psw,userName);
                if (nameReg.test(userName)&&pswReg.test(psw)) {
                
                    localStorage.setItem('userName', userName)
                    localStorage.setItem('psw', psw)
                    localStorage.setItem('man', 'true')
                    window.location.href="index.html#/login"
                    alert('注册成功！')
                }else{
                     alert('用户名或密码不正确！')
                }
            })
        }
    }
})
