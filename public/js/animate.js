$(document).ready(function() {
    $('.accord').click(function(){
        var menu = $(this).attr("href");
        $(menu).slideToggle();
        // $('.submenu').not($(menu).slideUp);
    })
    $('.option-click').click(function(){
        var menu=$(this).attr("href");
        $(menu).toggle();
        $(".option-menu").not($(menu)).hide();
    });
    $('.btn-tab-toggle').click(function(){
        var menu=$(this).attr("href");
        // var id_opt_menu=$(".option-menu").attr("id");
        $("."+menu).slideToggle("fast");
        $(menu+" .linkmore").toggle(180);
        if ($("."+menu).height() > 20) {
            $(this).css({
                "-webkit-transform" : "rotate(180deg)",
                "-moz-transform" : "rotate(180deg)",
                "transform" : "rotate(180deg)"
            })
            $('#'+menu).hide();
        }else{
            $(this).css({
                "-webkit-transform" : "rotate(0deg)",
                "-moz-transform" : "rotate(0deg)",
                "transform" : "rotate(0deg)"
            })
        }
    });
})

function closePopup(){
    $(".popup").fadeOut();
    $('.blur').fadeOut();
}