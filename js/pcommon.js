var adv={
    LIWIDTH:0,
    DISTANCE:0,
    DURATION:1000,
    STEPS:200,
    step:0,
    interval:0,
    timer:null,
    moved:0,
    WAIT:3000,
    init:function(){
        this.LIWIDTH=parseFloat($("#imgs li").css("width"));
        $("#imgs").css("width",this.LIWIDTH*2+"px");
        this.interval=this.DURATION/this.STEPS;
        this.moveAuto();
    },
    movestep:function(){
        $("#imgs").css("left",parseFloat($("#imgs").css("left"))-this.step+"px");
        this.moved++;
        if(this.moved==this.STEPS){
            clearInterval(this.timer);
            this.timer=null;
            $("#imgs").append($("#imgs li:first-child"));
            $("#idxs li.active").removeClass("active");
            var n=$("#imgs li:first-child img")[0].alt;
            $("#idxs  li:nth-child("+n+")").addClass("active");
            $("#imgs").css("left","");
            this.moved=0;
        }
    },
    move:function(){
        clearInterval(this.timer);
        this.timer=null;
        this.DISTANCE=this.LIWIDTH;
        this.step=this.DISTANCE/this.STEPS;
        this.timer=setInterval(this.movestep.bind(this),this.interval);
    },
    moveAuto:function(){
        setInterval(function(){
            this.move();
        }.bind(this),this.WAIT);
    }

}
