app.controller('chooseCtr', function($scope, $http) {
    angular.element(document).ready(function() {
        //点击小按钮的tab切换
        tag('.ch_tab span').click(function() {
            sindex = tag(this).index();
            // alert(sindex)
            tag('.ch_tab span').eq(sindex).addClass('ch_active').
            siblings().removeClass('ch_active');
            if (sindex == 0) {
                tag('.ch_tab .block').animate({ 'left': '3.6rem' }, 200);
                tag('.swiper-container6>.swiper-wrapper').css({
                    'transition-duration': '300ms',
                    'transform': 'translate3d(0,0px, 0px)'
                });
            } 
            else if (sindex == 1) {
                tag('.ch_tab .block').animate({ 'left': '5.6rem' }, 200);
                tag('.swiper-container6>.swiper-wrapper').css({
                    'transition-duration': '500ms',
                    'transform':'translate3d(-10.8rem,0px, 0px)'
                });
            }
        })
        //点击字母到对应位置
        tag('.ch_litnav p').find('a').on('singleTap',function() {
            var index = tag(this).index();
            // console.log(index)
            var scrolltop = tag('.ch_word  .ch_list').eq(index - 3).position().top;
                tag('.container').stop(true).animate({ "scrollTop": scrolltop },500);
        })
        tag('.ch_litnav p span').on('singleTap',function(){
            tag('.container').stop(true).animate({ "scrollTop": 0 },500);
        })
    })
    //请求json数据
    $http.get("json/choose.json")
        .success(function(response) {
            var hot = response[0].hot;
            $scope.hot = hot;
            $scope.img = hot.img;
            $scope.name = hot.name;

            var main = response[1].main;
            $scope.main = main;
            $scope.img = main.img;
            $scope.name = main.name;

            var byword = response[2].byWord;
            $scope.byword = byword;
        });
    setTimeout(function() {
        var swiper3 = new Swiper('.swiper-container3', {
            slidesPerView: 'auto'
                // slidesPerColumn: 1
        });
        var swiper6 = new Swiper('.swiper-container6', {
            slidesPerView: 'auto',
            slidesPerColumn: 1,
            onSlideChangeStart:function(swiper){
                if (swiper.activeIndex == 1) {
                    tag('.ch_litnav1').css('display','none');
                    tag('.ch_tab span').eq(swiper.activeIndex).addClass('ch_active').
            siblings().removeClass('ch_active');
                }
            },
            //滑动页面时触发
            onSlideChangeEnd: function(swiper) {
                if (swiper.activeIndex == 0) {
                    tag('.ch_litnav1').css('display','block');
                    tag('.ch_tab .block').animate({ 'left': '3.6rem' }, 200);
                    tag('.swiper-container6>.swiper-wrapper').css({
                    'transition-duration': '300ms',
                    'transform': 'translate3d(0,0px, 0px)'
                });

                } else if (swiper.activeIndex == 1) {
                    tag('.ch_tab .block').animate({ 'left': '5.6rem'}, 200);
                     tag('.swiper-container6>.swiper-wrapper').css({
                        'transition-duration': '500ms',
                        'transform': 'translate3d(-10.8rem,0px, 0px)'
                    });
                  
                }
                    tag('.ch_tab span').eq(swiper.activeIndex).addClass('ch_active').
            siblings().removeClass('ch_active');
            }
        });
    }, 1000)
});


