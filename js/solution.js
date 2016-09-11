$("#header").load("data/header.php",function(){
    $("#nav li a.current").removeClass("current");
    $("#nav li:nth-child(2) a").addClass("current");
});
$("#footer").load("data/footer.php");