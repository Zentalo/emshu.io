
$().ready(function(e) {	
	$("#wel_one").animate({left:"453px"},1400,"swing");
	$("#wel_two").animate({left:"453px"},1200,"swing");
	$("#wel_three").animate({left:"453px"},1000,"swing");
	$("#wel_four").animate({left:"453px"},800,"swing");	
	var url = window.location.href //获取当前URL
	if(url.indexOf("?") > 0 ) {var cutUrl = url.split("?");//用“?”将URL分割成2部分 
				var par =  cutUrl[1];
				var idParCut = par.split("=");
				var tid = idParCut[1];
				var pageid =tid-1;
				if(pageid == 1){
					$("#kf_one").animate({left:"657px"},1400,"swing");
					$("#kf_two").animate({left:"657px"},1200,"swing");
					$("#kf_three").animate({left:"657px"},1000,"swing");
					$("#kfbtn").animate({left:"657px"},800,"swing");
				}
				if(pageid == 2){
					$("#dz_one").animate({left:"210px"},1400,"swing");
					$("#dz_two").animate({left:"210px"},1200,"swing");
					$("#dz_three").animate({left:"210px"},1000,"swing");
					$("#dzbtn").animate({left:"210px"},800,"swing");
				}
				if(pageid == 3){
					$("#yl_one").animate({left:"890px"},1400,"swing");
					$("#yl_two").animate({left:"890px"},1200,"swing");
					$("#yl_three").animate({left:"890px"},1000,"swing");
					$("#ylbtn").animate({left:"890px"},800,"swing");
				}
				if(pageid == 4){
					$("#jg_one").animate({left:"220px"},1400,"swing");
					$("#jg_two").animate({left:"220px"},1200,"swing");
					$("#jg_three").animate({left:"220px"},1000,"swing");
					$("#jgbtn").animate({left:"220px"},800,"swing");
				}
	}
	
		$f.create($f.slide,{parent:'.banner_container',target:'.banner_content',nav:'.banner_nav li',start:pageid,easing:'easeInOutExpo',duration:1000,time:20000,auto:true,dir:0,current:'current'});
		var pos = {
			0:453,1:657,2:210,3:890,4:220

		},offset = 600,time_one=1400,time_two=1200,time_three=1000,time_four=800;

		$('.banner_content').each(function(index, element) {

			$(this).bind('slideInPos',function(){
				$(this).find('.banner_link_one').stop().css({left:pos[index]-offset}).animate({left:pos[index]},time_one,'swing');
				$(this).find('.banner_link_two').stop().css({left:pos[index]-offset}).animate({left:pos[index]},time_two,'swing');
				$(this).find('.banner_link_three').stop().css({left:pos[index]-offset}).animate({left:pos[index]},time_three,'swing');
				$(this).find('.banner_link_four').stop().css({left:pos[index]-offset}).animate({left:pos[index]},time_four,'swing');

			}).bind('slideInNeg',function(){

				$(this).find('.banner_link_one').stop().css({left:pos[index]+offset}).animate({left:pos[index]},time_one,'swing');
				$(this).find('.banner_link_two').stop().css({left:pos[index]+offset}).animate({left:pos[index]},time_two,'swing');
				$(this).find('.banner_link_three').stop().css({left:pos[index]+offset}).animate({left:pos[index]},time_three,'swing');
				$(this).find('.banner_link_four').stop().css({left:pos[index]+offset}).animate({left:pos[index]},time_four,'swing');

			}).bind('slideOutPos',function(){

				$(this).find('.banner_link_one').stop().css({left:pos[index]}).animate({left:pos[index]+offset},time_one,'swing');
				$(this).find('.banner_link_two').stop().css({left:pos[index]}).animate({left:pos[index]+offset},time_two,'swing');
				$(this).find('.banner_link_three').stop().css({left:pos[index]}).animate({left:pos[index]+offset},time_three,'swing');
				$(this).find('.banner_link_four').stop().css({left:pos[index]}).animate({left:pos[index]+offset},time_four,'swing');

			}).bind('slideOutNeg',function(){

				$(this).find('.banner_link_one').stop().css({left:pos[index]}).animate({left:pos[index]-offset},time_one,'swing');
				$(this).find('.banner_link_two').stop().css({left:pos[index]}).animate({left:pos[index]-offset},time_two,'swing');
				$(this).find('.banner_link_three').stop().css({left:pos[index]}).animate({left:pos[index]-offset},time_three,'swing');
				$(this).find('.banner_link_four').stop().css({left:pos[index]}).animate({left:pos[index]-offset},time_four,'swing');

			});

		});	
		
	});
function mouseIn(id){
	$(id).children().stop(true,true).animate({opacity:"1"},400,"easeInOutBounce")
	}
function mouseOut(id){
	$(id).children().stop(true,true).animate({opacity:"0"},400,"easeInOutBounce")
	}

	$(".prove_index").click(function(){
		$(".banner_nav li").eq($(".banner_nav li.current").index()-1).children("a").click();
		});
	$(".next_index   ").click(function(){
		$(".banner_nav li").eq($(".banner_nav li.current").index()+1).children("a").click();
		});
		$(".next_index").click(function(){
		if($(".banner_nav li.current").index()==6){
			$(".banner_nav li").eq(0).children("a").click();
			};
		});
		
		$(".banner_container").mouseover(function(){
			 $(".prove_index,.next_index").show()
			 });
		$(".banner_container").mouseout(function(){
			 $(".prove_index,.next_index").hide()
			 });
				 
	$(document).ready(function(e) {
    var url = window.location.href //获取当前URL
	if(url.indexOf("?") > 0 ) {
		var cutUrl = url.split("?");//用“?”将URL分割成2部分 
		var par =  cutUrl[1];
		var idParCut = par.split("=");
		var tid = idParCut[1];
		if(tid==2){$(".banner_nav li").eq(1).children("a").click()}
		if(tid==3){$(".banner_nav li").eq(2).children("a").click()}
		if(tid==4){$(".banner_nav li").eq(3).children("a").click()}
		if(tid==5){$(".banner_nav li").eq(4).children("a").click()}
		if(tid==6){$(".banner_nav li").eq(5).children("a").click()}
		if(tid==7){$(".banner_nav li").eq(6).children("a").click()}
		else{return false}
	}
	else{
	    return false;
	}
});	



