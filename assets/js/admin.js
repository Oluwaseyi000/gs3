$(document).ready(function(){
    
    /*
    $("body").niceScroll({
        autohidemode: false,
        cursorcolor: 'rgba(0,0,0,0.2)',
        cursorwidth: '10px',
        cursorborder: 'none',
        //background: '#ddd',
        zindex: 999999,
        smoothscroll: true,
        sensitiverail: true,
        railpadding: {right: 0, left: 0},
        bouncescroll: true
    });
    */
    
    /*
    $("#sidebar_body").niceScroll({
        autohidemode: true,
        cursorcolor: 'rgba(0,0,0,0.2)',
        cursorwidth: '10px',
        cursorborder: 'none',
        //background: '#ddd',
        smoothscroll: true,
        sensitiverail: true,
        railpadding: {right: 0, left: 0},
        bouncescroll: true
    });
    */
    
    $("#sidebar_links > ul > li > a").click(function(e){
        if(($(this).siblings("div").length) > 0){
            $(this).siblings("div").slideToggle(300, function(){
                $("#sidebar_body").getNiceScroll().resize();
            });
            e.preventDefault();
        }
    });
    
    function hide_sidebar(){
        $("#hide_sidebar").children("span").removeClass("fa-ellipsis-v").addClass("fa-bars");
        $("#sidebar_top > div:nth-child(1)").css("display","none");
        $("#sidebar_top > div:nth-child(2)").css("display","block");
        $("#main_body").animate({"margin-left":"80px"},300);
        $("#sidebar_links > ul > li a").css({"text-align":"center","padding":"10px 0px"});
        $("#sidebar_links > ul > li a > span:first-child").css({"margin":"auto","float":"none"});
        $("#sidebar_links > ul > li a > span:nth-child(2), #sidebar_links > ul > li a > span:nth-child(3)").css("display","none");
        $("#sidebar_links > ul > li > div").removeClass("sidebar_links_d1").addClass("sidebar_links_d2").css("display","none");
        $("#sidebar").animate({"width":"80px"},300);
        $("#sidebar_body").removeClass("sidebar_body_unshrinked");
        $("#hide_sidebar").addClass("sidebar_shrinked");
        $("#sidebar_links > ul > li > ul").slideUp(300);
        $("#sidebar_links > ul > li > a").each(function () {
            $(this).attr("title", $(this).text().trim());
            //$(this).attr("data-original-title", $(this).text().trim());
            //$(this).attr("data-toggle", "tooltip");
        });
        $('[data-toggle="tooltip"]').tooltip();
        Cookies.set('sidebar_shrink', 'yes');
    }
    
    function expand_sidebar(){
        Cookies.remove('sidebar_shrink');
        $("#hide_sidebar").removeClass("sidebar_shrinked");
        $("#hide_sidebar").children("span").removeClass("fa-bars").addClass("fa-ellipsis-v");
        $("#sidebar_body").addClass("sidebar_body_unshrinked");
        $("#sidebar_links > ul > li a").css({"text-align":"left","padding":"10px 10px"});
        $("#sidebar_links > ul > li a > span:first-child").css({"margin":"0px 10px 0px 0px","float":"left"});
        $("#sidebar_links > ul > li a > span:nth-child(2), #sidebar_links > ul > li a > span:nth-child(3)").css("display","block");
        $("#sidebar_links > ul > li > div").removeClass("sidebar_links_d2").addClass("sidebar_links_d1");
        $("#sidebar").animate({"width":"220px"},300);
        $("#main_body").animate({"margin-left":"220px"},300);
        $("#sidebar_top > div:nth-child(2)").css("display","none");
        $("#sidebar_top > div:nth-child(1)").css("display","block");
        $("#sidebar_links > ul > li > a").each(function () {
            $(this).removeAttr("title").removeAttr("data-toggle").removeAttr("data-original-title");
        });
    }
    
    var sidebar_shrink = Cookies.get('sidebar_shrink');
    if((sidebar_shrink == "") || (typeof sidebar_shrink === "undefined")){
        //expand_sidebar();
    }
    else{
        hide_sidebar();
    }
    
    $("#hide_sidebar").click(function(){
        if(!($("#hide_sidebar").hasClass("sidebar_shrinked"))){
            hide_sidebar();
        }
        else{
            expand_sidebar();
        }
    });
    
    $("#main_body_search > div > input").focusin(function(){
        $(this).parent().prev("span").css("color","#aaa");
    });
    
    $("#main_body_search > div > input").focusout(function(){
        $(this).parent().prev("span").css("color","#e3e3e3");
    });
    
    $("#main_body_top_option > span").click(function(){
        $(this).parent().children("ul").slideToggle(300);
        $(this).parent().children("div").slideToggle(300);
        $(document).click(function(e){
            var target = e.target;
            if (!$(target).is("#main_body_top_option > span, #main_body_top_option > ul, #main_body_top_option > div") && !$(target).parents().is("#main_body_top_option > span, #main_body_top_option > ul, #main_body_top_option > div")){
                $("#main_body_top_option > ul, #main_body_top_option > div").slideUp(300);
            }
        });
    });
    
});