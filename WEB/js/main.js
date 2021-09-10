$(document).ready(function(){
    
        if (matchMedia("screen and (min-width: 769px)").matches) {
            $('.ioniqH,.trappistH,.fortnumH,.guinnessH,.harimH').css('display','none');
            
            $('.ioniq5').hover(function(){
                $('.ioniqH,.ioniqH h3,.ioniqH p').animate({opacity:'0'},0),
                $('.ioniqH,.ioniqH h3,.ioniqH p').animate({opacity:'1'},1000),
                $('.ioniqH').css('display','block')
            },function(){
                $('.ioniqH').css('display','none')
            });
            $('.trappist').hover(function(){
                $('.trappistH,.trappistH h3,.trappistH p').animate({opacity:'0'},0),
                $('.trappistH,.trappistH h3,.trappistH p').animate({opacity:'1'},1000),
                $('.trappistH').css('display','block')
            },function(){
                $('.trappistH').css('display','none')
            });
            $('.fortnum').hover(function(){
                $('.fortnumH,.fortnumH h3,.fortnumH p').animate({opacity:'0'},0),
                $('.fortnumH,.fortnumH h3,.fortnumH p').animate({opacity:'1'},1000),
                $('.fortnumH').css('display','block')
            },function(){
                $('.fortnumH').css('display','none')
            });
            $('.guinness').hover(function(){
                $('.guinnessH,.guinnessH h3,.guinnessH p').animate({opacity:'0'},0),
                $('.guinnessH,.guinnessH h3,.guinnessH p').animate({opacity:'1'},1000),
                $('.guinnessH').css('display','block')
            },function(){
                $('.guinnessH').css('display','none')
            });
            $('.harim').hover(function(){
                $('.harimH,.harimH h3,.harimH p').animate({opacity:'0'},0),
                $('.harimH,.harimH h3,.harimH p').animate({opacity:'1'},1000),
                $('.harimH').css('display','block') 
            },function(){
                $('.harimH').css('display','none')
            });
            
            
            } else {
                $('.ioniqH,.trappistH,.fortnumH,.guinnessH,.harimH').css('display','block');
            
            }

            
            
        //$(window).resize(function(){
        //var width = $(window).width();    
        // if (width>768) {
        //     $('.ioniqH,.trappistH,.fortnumH,.guinnessH,.harimH').css('display','none');
            
        //     $('.ioniq5').hover(function(){
        //         $('.ioniqH,.ioniqH h3,.ioniqH p').animate({opacity:'0'},0),
        //         $('.ioniqH,.ioniqH h3,.ioniqH p').animate({opacity:'1'},1000),
        //         $('.ioniqH').css('display','block')
        //     },function(){
        //         $('.ioniqH').css('display','none')
        //     });
        //     $('.trappist').hover(function(){
        //         $('.trappistH,.trappistH h3,.trappistH p').animate({opacity:'0'},0),
        //         $('.trappistH,.trappistH h3,.trappistH p').animate({opacity:'1'},1000),
        //         $('.trappistH').css('display','block')
        //     },function(){
        //         $('.trappistH').css('display','none')
        //     });
        //     $('.fortnum').hover(function(){
        //         $('.fortnumH,.fortnumH h3,.fortnumH p').animate({opacity:'0'},0),
        //         $('.fortnumH,.fortnumH h3,.fortnumH p').animate({opacity:'1'},1000),
        //         $('.fortnumH').css('display','block')
        //     },function(){
        //         $('.fortnumH').css('display','none')
        //     });
        //     $('.guinness').hover(function(){
        //         $('.guinnessH,.guinnessH h3,.guinnessH p').animate({opacity:'0'},0),
        //         $('.guinnessH,.guinnessH h3,.guinnessH p').animate({opacity:'1'},1000),
        //         $('.guinnessH').css('display','block')
        //     },function(){
        //         $('.guinnessH').css('display','none')
        //     });
        //     $('.harim').hover(function(){
        //         $('.harimH,.harimH h3,.harimH p').animate({opacity:'0'},0),
        //         $('.harimH,.harimH h3,.harimH p').animate({opacity:'1'},1000),
        //         $('.harimH').css('display','block') 
        //     },function(){
        //         $('.harimH').css('display','none')
        //     });

        // } else if (width<=768){
        //     $('.ioniqH,.trappistH,.fortnumH,.guinnessH,.harimH').css('display','block');

        // }
        
    //});
    
    //$(window).trigger("resize"); //강제로 호출하는 함수
    

});
