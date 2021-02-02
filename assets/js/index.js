$(document).ready(function(){
    
    /*
    $("body").niceScroll({
        autohidemode: false,
        cursorcolor: '#aaa',
        cursorwidth: '10px',
        cursorborder: '1px solid #ddd',
        background: '#ddd',
        zindex: 999999,
        smoothscroll: true,
        sensitiverail: true,
        railpadding: {right: 0, left: 0},
        boxzoom: true,
        bouncescroll: true
    });
    */
   
    var scroll_to = "";
    function scroll_to_section(scroll_to){
        if ((scroll_to !== "") && (scroll_to.substr(0,1) === "#")){
            $("html,body").animate({
                scrollTop: $(scroll_to).offset().top
            },500);
        }
    }

    scroll_to = window.location.hash;
    scroll_to_section(scroll_to);

    $("a[href]").click(function(e){
        scroll_to = $(this).attr("href").trim();
        scroll_to_section(scroll_to);
    });
   
});