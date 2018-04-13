$(function () {
    //获取元素
    //获取父盒子
    var $banner = $('.sn_banner');
    //移动的距离
    var width = $banner.width();
    //获取图片的盒子
    //如果要支持 jquery扩展选择器  需要一个selector模块
    var $imgBox = $banner.find('ul:first');
    //获取点要随着图片移动
    var $pointBox = $banner.find('ul:eq(1)');

    var index = 1;

    var animate = function () {
        $imgBox.animate({'transform': 'translateX(' + (-index * width) + 'px)'}, 200, 'linear', function () {
            if (index >= 9) {
                index = 1;
                $imgBox.css({'transform': 'translateX(' + (-index * width) + 'px)'})
            } else if (index <= 0) {
                index = 8;
                $imgBox.css({'transform': 'translateX(' + (-index * width) + 'px)'})
            }
            $pointBox.find('li').removeClass('now').eq(index - 1).addClass('now');
        })
    };

    $imgBox.on('swipeLeft',function () {
        index++;
        animate();
    }).on('swipeRight',function () {
        index--;
        animate();
    });

    var timer = setInterval(function () {
        index++;
        animate();
    }, 5000);


});