$("#header").load("data/header.php",function(){
    $("#nav li a.current").removeClass("current");
    $("#nav li:nth-child(5) a").addClass("current");
});