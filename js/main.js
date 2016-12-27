;(function ($) {
    var $images = $('.media-image'),
        $menu = $('.mobile-menu'),
        $nav = $('.mobile-nav'),
        $siteWrapper = $('.site-wrapper'),
        $loadPanel = $('.load-panel');
    
    
    
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
                    $('body').css('overflow','hidden');
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
                    $('body').css('overflow','auto');
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
        }

    };

    Functions.addingImgNote();
    Functions.openMenu();
    $(window).on('load',function(){
        Functions.loadAnimation();
    });
})(jQuery);


