$("#header").load("data/header.php",function() {
	$("#nav li a.current").removeClass("current");
	$("#nav li:nth-child(1) a").addClass("current")
});
$("#footer").load("data/footer.php");


window.$=HTMLElement.prototype.$=function(selector){
    var elems=(this==window?document:this)
        .querySelectorAll(selector);
    return elems.length==0?null:elems.length==1?elems[0]:elems;
}
HTMLElement.prototype.bind=document.bind=function(eName,fn,capture){
	this.addEventListener(eName,fn,capture);
}
HTMLElement.prototype.css=function(prop,value){
	if(value===undefined){
		var style=getComputedStyle(this);
		return style[prop];
	}else{
		this.style[prop]=value;
	}
}

var imgs=[
	{i:0,src:"images/banner-01.jpg"},
	{i:1,src:"images/banner-02.jpg"},
	{i:2,src:"images/banner-03.jpg"},
	{i:3,src:"images/banner-04.jpg"}
]
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
	canAuto:true,
	init:function(){
		this.LIWIDTH=parseFloat($("#banner").css("width"));
		this.interval=this.DURATION/this.STEPS;
		this.updateView();
		$("#idxs").bind("mouseover",function(e){
			var target=e.target;
			if(target.nodeName=="LI"&&target.className!="hover"){
				var start=$("#idxs .hover").innerHTML;
				var end=target.innerHTML;
				this.move(end-start);
			}
		}.bind(this));
		this.autoMove();
		$("#banner").bind("mouseover",function(){
			this.canAuto=false;
		}.bind(this));
		$("#banner").bind("mouseout",function(){
			this.canAuto=true;
		}.bind(this));
	},
	autoMove:function(){
		this.timer=setTimeout(function(){
			this.canAuto?this.move(1):this.autoMove()
		}.bind(this),this.WAIT)
	},
	move:function(n){
		clearInterval(this.timer);
		this.timer=null;
		this.DISTANCE=this.LIWIDTH*n;
		this.step=this.DISTANCE/this.STEPS;
		if(n>0){
			this.timer=setInterval(this.moveStep.bind(this,function(){
				imgs=imgs.concat(imgs.splice(0,n));
				this.updateView();
				$("#imgs").css("left","")
			}.bind(this)),this.interval)
		}else{
			imgs=imgs.splice(imgs.length+n,-n).concat(imgs);
			this.updateView();
			$("#imgs").css("left",this.LIWIDTH*n+"px");
			this.timer=setInterval(this.moveStep.bind(this),this.interval)
		}
	},
	moveStep:function(callback){
		$("#imgs").css("left",parseFloat($("#imgs").css("left"))-this.step+"px");
		this.moved++;
		if(this.moved==this.STEPS){
			clearInterval(this.timer);
			this.timer=null;
			callback&&callback();
			$("#imgs").css("left","");
			this.moved=0;
			this.autoMove();
		}
	},
	updateView:function(){
		$("#imgs").innerHTML="";
		$("#idxs").innerHTML="";
		//$("#imgs").html("");
		//$("#idxs").html("");
		var fragImgs=document.createDocumentFragment();
		var fragIdxs=document.createDocumentFragment();
		for(var i=0;i<imgs.length;i++){
			var li=document.createElement("li");
			var img=new Image;
			img.src=imgs[i].src;
			li.appendChild(img);
			fragImgs.appendChild(li);
			var li=document.createElement("li");
			if(i==imgs[0].i){
				li.className="hover";
			}
			li.innerHTML=i+1;
			fragIdxs.appendChild(li);
		}
		$("#imgs").appendChild(fragImgs);
		$("#idxs").appendChild(fragIdxs);
		//$("#imgs").append(fragImgs);
		//$("#idxs").append(fragIdxs);
		$("#imgs").css("width",this.LIWIDTH*imgs.length+"px");
	}
}
adv.init();

