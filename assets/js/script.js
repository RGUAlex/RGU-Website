$(document).ready(function(){
    /* ..................... start header section ..................... */
    $(".menu_toggleBtn").click(function(){
        $(".header_navLinkArea").addClass("active")
    });
    $(".menu_clsBtn,.nav_backDrop").click(function(){
        $(".header_navLinkArea").removeClass("active")
    });
    
    $(".header_navItem").mouseover(function(){
        $(this).addClass("expand_subNav");
    });
    $(".header_navItem").mouseout(function(){
        $(this).removeClass("expand_subNav");
    });

    $(".subNavToggleBtn").click(function(){
        $(this).parents(".header_navItem").toggleClass("expand_subNav");
    })
    /* ..................... end header section ..................... */
})