'use strict'
$(document).ready(function() {
    $('.bxSlider-1').bxSlider({
        mode: 'horizontal',
        auto: false,
        responsive: true,
        autoControls: true,
        speed: 1000,
        slideSelector: '.firstBlock__brands__list__element',
        minSlides: 1,
        maxSlides: 7,
        moveSlides: 2,
        slideWidth: 150,
        pager: false,
        touchEnabled: true,
        slideMargin: 0,
        useCSS: true,
        infiniteLoop: true,
        controls: false
    });

    let widthTabChecker =()=>{
        console.log(window.innerWidth)
        if(window.innerWidth >= 610 && window.innerWidth <= 890){
        return Math.floor(parseInt(
            window.innerWidth - ((window.innerWidth / 100) * 30)));
        }else if(window.innerWidth >= 410 && window.innerWidth <= 610){
        return Math.floor(parseInt(
            window.innerWidth - ((window.innerWidth / 100) * 34)));
        }else if(window.innerWidth >= 220 && window.innerWidth <= 410) {
            return Math.floor(parseInt(
                window.innerWidth - ((window.innerWidth / 100) * 40)));
        }
    }
    let widthChecker=window.innerWidth <= 910 ? widthTabChecker() : 273
    const renderSlider=(widthChecker)=> {
        $('.bxSlider-2').bxSlider({
            mode: 'horizontal',
            auto: false,
            responsive: false,
            autoControls: true,
            speed: 1000,
            slideSelector: '.secondBlock__recommend__products__block__list__element',
            minSlides: 1,
            maxSlides: 6,
            moveSlides: 1,
            slideWidth: widthChecker,
            pager: false,
            touchEnabled: true,
            slideMargin: 50,
            useCSS: true,
            prevText: " ",
            nextText: " ",
            nextSelector: '.arrow-right',
            prevSelector: '.arrow-left',
            controls: true,
            infiniteLoop: true
        });
    }
    renderSlider(widthChecker);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        renderSlider(widthChecker);
    }
})

//     $( window ).resize(function() {
//         if (window.innerWidth <= 768) {
//             // console.log(window.innerWidth)
//             mobileOnlySlider();
//             // console.log(window.innerWidth)
//         }else if(window.innerWidth >= 768 && window.innerWidth <=824){
//             location.reload()
//         }
//     });
//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 770) {
//         mobileOnlySlider();
//         console.log(window.innerWidth);
//     }
//     $( window ).resize(function() {
//         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 770) {
//             mobileOnlySlider();
//             // console.log('ok');
//             console.log(window.innerWidth);
//             // console.log(window.innerWidth);
//         } else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth >= 770 && window.innerWidth <= 900) {
//             // console.log('ok');
//             // console.log(window.innerWidth);
//             location.reload();
//         }
//     });
//     function mobileOnlySlider() {
//
//         $('.bxSlider-3').bxSlider({
//             mode: 'horizontal',
//             auto: false,
//             responsive: true,
//             autoControls: true,
//             speed: 1000,
//             slideSelector: '.thirdBlock__brands__element',
//             minSlides: 1,
//             maxSlides: 3,
//             moveSlides: 2,
//             slideWidth: 140,
//             nextSelector:'.thirdBlock-right',
//             prevSelector:'.thirdBlock-left',
//             prevText:" ",
//             nextText:" ",
//             pager: false,
//             touchEnabled: false,
//             slideMargin: 0,
//             useCSS: false,
//             controls: true,
//             infiniteLoop: false
//         });
//     }
//
// });
