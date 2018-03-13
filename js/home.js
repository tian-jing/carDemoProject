
app.controller('homerCtr', function($scope,$http) {
	//dom事件
	angular.element(document).ready(function(){
		//切换部分
		var ho_w = tag(document).width();
    	tag('.ho-nav ul li').on('click',function(){
    		var index = tag(this).index();
    		tag(this).find('span').addClass('ho-active').end().siblings().find('span').removeClass('ho-active');
    		tag('.ho-wrapper').css({'transition-duration': '300ms','transform': 'translate3d(-'+index*ho_w+'px, 0px, 0px)'});
    	})
    	//关闭广告
    	tag('.ho-close').on('singleTap',function(){
    		tag('.ho-pic').css('display','none').siblings('.ho-fq').css('display','block');
    		 setTimeout(function(){
	   			var swiper6 = new Swiper('.swiper-container6', {
			        slidesPerView: 'auto'
			    });
    		},1000);
    	})
    	//获取当前日期
    	var mydate = new Date();
	    // var str = "" + mydate.getFullYear() + "年";
	    var str = "" + (mydate.getMonth()+1) + "月";
	    str += mydate.getDate() + "日";
	    tag(".ho-yc-time").html(str);
	});

    //swiper部分
    setTimeout(function(){
    	//导航nav
    	var swiper1 = new Swiper('.swiper-container1', {
	        slidesPerView: 'auto'
	    });
	    //整体滑动
	    var swiper12 = new Swiper('.swiper-container12', {
	        slidesPerView: 1,
	        slidesPerColumn: 1,
	        onSlideChangeEnd: function(swiper){
	        	angular.element(document).ready(function(){
					var ho_w = tag(document).width();
					var ho_li = tag('.ho-ul li').width();
	    			var i = tag('.ho-wrapper').children('div.swiper-slide-active').index();
	    			//滑动跟踪
		    		tag('.ho-nav ul li').eq(i).find('span').addClass('ho-active').end().siblings().find('span').removeClass('ho-active');
		    		if(i<6){
		    			tag('.ho-ul').css({'transition-duration': '300ms','transform': 'translate3d(0px, 0px, 0px)'});
		    		}else if(i>=6&&i<12){
		    			tag('.ho-ul').css({'transition-duration': '300ms','transform': 'translate3d(-'+(ho_w-ho_li/1.6)+'px, 0px, 0px)'});
		    		}else if(i>=12){
		    			tag('.ho-ul').css({'transition-duration': '300ms','transform': 'translate3d(-'+(ho_w-ho_li/2+ho_li*1.8)+'px, 0px, 0px)'});
		    		}
		    	})
    		}
	    });
	    //轮播图
	    var swiper123 = new Swiper('.swiper-container123', {
	        pagination: '.swiper-pagination',
	        paginationClickable: true,
	        autoplay: 2500,
	        loop:true,
	        slidesPerView: 1,
	        autoplayDisableOnInteraction: false
	    });
	 	// var swiper6 = new Swiper('.swiper-container6', {
	 	// 	slidesPerView: 'auto'
	  //       // nested: true
	  //   });
    },100);


    //疯抢
    $http.get('json/home.json')   //params关键字表示函数的参数是可变个数的
	.success(function(data){
		$scope.fqiang = data[1].fqiang;
		$scope.list1 = data[2].list1;
		$scope.turnImg = data[0].turnImg;
		$scope.imgSrc = data[3].list2;
		$scope.list3 = data[4].list3;
		$scope.hbImg = data[5].hbImg;
	})
	.error(function(data){
		console.log("error");
	})
})
