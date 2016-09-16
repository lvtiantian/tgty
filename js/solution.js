$("#header").load("data/header.php",function(){
    $("#nav li a.current").removeClass("current");
    $("#nav li:nth-child(2) a").addClass("current");
});
$("#banner").load("data/pcommon.php",function(){
    adv.init();
});
$("#footer").load("data/footer.php");
$(".left li:not(:first-child) a").click(function(e){
    e.preventDefault();
    $(".left li.hover").removeClass("hover");
    $(this).parent().addClass("hover");
    $(".right>div:not(:first-child)").hide();
    var i=$(this).parent().index(".left li");
    $(".right>div:first-child span:last-child").html($(this).html());
    $(".right>div:nth-child("+(i+1)+")").show();
})