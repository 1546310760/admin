$(function(){
	
    
    
    $(".tabmenu .lk").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        
        var index=$(this).parent('.tabmenu').children('.lk').index(this);    
        
        $(this).parents(".tabmenu").siblings(".tabwrap").find(".module").eq(index).show().siblings().hide();
        
    });
   //
    $('.side_menu .item').click(function(){
        $(this).toggleClass('cur').find('.drop').slideToggle();
        $(this).siblings('.item').removeClass('cur').find('.drop').slideUp();
    });
  //个人资料通用弹窗 
    $('.pop_perdata .close').click(function(){
        $('.pop_bg').hide();
        $('.pop_perdata').hide();
    });
    $('.pop_bg').click(function(){
        $('.pop_bg').hide();
        $('.pop_perdata').hide();
    });
    
    
});
