    FiAjax();
FiTimeOut();
fiAddEventListenerScroll();
//Ajax请求数据
function FiAjax() {

    //自定义指令repeatFinish
    app.directive('repeatFinish', function() {
        return {
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $('.fi_top').hide();
                    FiLunBo();
                    FiMainleSwiper();
                    fiAddEventListenerScroll();
                }
            }
        };
    });
    app.controller('findCtr', function($scope, $http) {
        $http.get('json/find.json')
            .success(function(data) {

                $scope.fiLunImgs = data.fiLunImgs;
                $scope.doubleEPurchase = data.doubleEPurchase;
                $scope.PurchaseGoods = data.PurchaseGoods;
                $scope.goodsList = data.goodsList;
                // console.log($scope.fiLunImgs);
                // console.log($scope.doubleEPurchase);
                // console.log($scope.PurchaseGoods);
                // console.log($scope.goodsList);
                //全局滚动条
                //var gdsL=$scope.goodsList
                //FiScroll();
            })
            .error(function(data) {
                console.log("error");
            });
    });
    // return data;
}

//  find 轮播图
function FiLunBo() {
    setTimeout(function() {
        // alert(0)
        var FiLunBo = new Swiper('.fi_lunbo_box', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 2000
        });
    }, 100);
}
//倒计时
function FiTimeOut() {
    var Now, Len;
    var End = new Date('2016/11/19');
    setInterval(function() {
        Now = new Date();
        Len = parseInt(End - Now) / 1000;
        var day = Math.floor(Len / 3600 / 24);
        var hour = Math.floor((Len / 3600) % 24);
        var min = Math.floor((Len / 60) % 60);
        var sec = Math.floor(Len % 60);
        $('#fi_timeD').html(day);
        $('#fi_timeH').html(hour);
        $('#fi_timeM').html(min);
        $('#fi_timeS').html(sec);
    }, 1000);
}

// 单个滚动条
function FiMainleSwiper() {

    //整体滚动条
    var FIscroll = new iScroll('fi_Main', {
        hScrollbar: false,
        vScrollbar: false,
        fixedScrollbar: true
    });
    // console.log(FIscroll);
    //双11抢购滚动条
    var FIPurchaseScroll = new iScroll('fi_purchaseBox', {
        hScrollbar: false,
        vScrollbar: false,
        fixedScrollbar: true,
        bounce: false
    });
    //限时抢购滚动条
    var FIPGScroll = new iScroll('fi_PurchaseGoods', {
        hScrollbar: false,
        vScrollbar: false,
        vScroll: false,
        fixedScrollbar: true,
        bounce: false
    });
}

function fiAddEventListenerScroll() {
    setTimeout(function() {
            var fiMain = document.getElementById('fi_Main');
            var fiCtal = document.getElementById('fi_container_scroll');
            // var fiTop = document.getElementsByClassName('fi_deserveShop')[0];
            var fiTop = $('.fi_specialShop');
            fiMain.addEventListener('touchmove', function() {
                    if (fiTop.offset().top <= 480) {
                        $('.fi_top').show();
                    } else {
                        $('.fi_top').hide();
                    }
                },false);
            window.onscroll = function() {
                console.log(x)
            }
        }, 100)
        setTimeout(function() {
            angular.element(document).ready(function() {
                $('.fi_top').on('tap', function() {
                    $('#fi_container_scroll').css('transform','translate(0px, 0)');
                    $('.fi_top').hide();
                        console.log($('.fi_ScrollBox').offset().top);
                });
            });
        }, 3000);
}

