
    var foSwiper = new Swiper('.fo_wiperBox', {
        pagination: '.swiper-pagination',
        paginationClickable: true 	
    });
//setTimeout(function(){
//  	var swiper1 = new Swiper('.swiper1', {
//	        slidesPerView: 'auto'
//	    });
//	    var swiper2 = new Swiper('.swiper2', {
//	        slidesPerView: 1
//	    });
//  },100);

app.controller('forumCtr', function($scope, $http) {
		$http.get('json/forum.json')
		.success(function(data){
//			alert(0)
			$scope.fodata = data.names;	
		})
		.error(function(data){
			console.log("error");
		})
	});