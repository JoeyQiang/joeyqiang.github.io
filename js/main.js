;(function ($) {
    var $body = $('body'),
        $images = $('.media-image'),
        $menu = $('.mobile-menu'),
        $nav = $('.mobile-nav'),
        $siteWrapper = $('.site-wrapper'),
        $loadPanel = $('.load-panel'),
        $desktopHeader = $('.desktop-header');
    
    
    
    var Functions = {

        addingImgNote: function(){
           $images.each(function () {
               $this = $(this);
               $this.alt = $(this).attr('alt');
               if($this.alt!==''){
                   var $imgNote = '<span class="image-note">'+$this.alt+'<span/>';
                   $this.after($imgNote);
               }
           });
        },
        
        openMenu: function () {
            var lock = false;
            $menu.click(function (e) {
                e.preventDefault();
                var top = $(window).scrollTop(),
                    left = $(window).scrollLeft();
                if(!lock){
                    $body.css('overflow','hidden');
                    $(window).scroll(function () {
                        $(this).scrollTop(top).scrollLeft(left);
                    });
                    $nav.css({
                        'display':'block',
                        'top':top,
                        'left':left
                    }).addClass('triggered');
                    $(this).addClass('triggered');
                }
                else{
                    $body.css('overflow','auto');
                    $(window).unbind('scroll');
                    $nav.css('display','none')
                        .removeClass('triggered');
                    $(this).removeClass('triggered');
                }
                lock = !lock;
            });
        },

        loadAnimation: function(){
            $loadPanel.css('display','none');
            $siteWrapper.css('display','block');
        },

        logoAnimation:function () {
            $(window).scroll(function () {
                var bottom = $('div.intro').offset().top + $('div.intro').height();
                console.log(bottom);
                if($body.scrollTop() > bottom){
                    $desktopHeader.addClass('fadeOut');
                }
                else{
                    $desktopHeader.removeClass('fadeOut');
                }
            });
        },

        jumpPostion: function(){
            $nav.click(function(e){
                var $target = $(e.target);
                if($target.is('a')){
                    e.preventDefault();
                    $nav.css('display','none');
                    $menu.trigger('click');
                    var index = $target.parent().index();
                    switch(index) {
                        case 0:
                            $body.animate({scrollTop: $('div.works').offset().top}, 500, 'easeOutQuart');
                            break;
                        case 1:
                            $body.animate({scrollTop: $('div.about').offset().top}, 500, 'easeOutQuart');
                            break;
                        case 2:
                            $body.animate({scrollTop: $('div.contact').offset().top}, 500, 'easeOutQuart');
                            break;
                        default: return;
                    }
                }
            });
        }

    };



    $(window).on('load',function(){
        Functions.loadAnimation();
    });
    Functions.addingImgNote();
    Functions.openMenu();
    Functions.jumpPostion();
    Functions.logoAnimation();
})(jQuery);


