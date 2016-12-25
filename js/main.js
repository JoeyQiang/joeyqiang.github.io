;(function ($) {
    var $images = $('.media-image');
    
    
    
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
        }

    };

    Functions.addingImgNote();
})(jQuery);


