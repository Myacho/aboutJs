var pageCount = 4;//页面数目

var width = window.innerWidth;
var height = window.innerHeight;

//设置盒子最外层的宽度和高度
$(".content").width(width);
$(".content").height(height*pageCount);
//设置每一页的宽高
$(".page").width(width);
$(".page").height(height);

var nowPage = 0;

//实现点击翻页事件

function up(){
	nowPage ++;
	if (nowPage < 0) {
		nowPage = 0;
	}
	else if (nowPage > pageCount-1) {
		nowPage = pageCount-1;
	}
	$(".content").animate({top:nowPage *-100 + "%"},500,function(){
		animation();
	});
}

//第一页相应JS效果  楼慢慢显现出来之后人飞进来(回调)
$(".page1_build").fadeIn(2000,function(){
	$(".flight").animate({top:'30%',left:'22.5%'},2000,function(){
		//可以回调自己
	});
});

//加载其他页的JS效果
function animation(){
	//第二页的
	if (nowPage == 1) {
		console.log("第二页到了");
		//css中.farm元素用到left,top，这里也要对应用left,top
		$(".farm").animate({top:'25%',left:'25%'},2000,function(){
			$(".it").fadeOut(2000);
		});
	}
	//第三页
	if (nowPage == 2) {
		console.log("第三页到了"); 
		//回调执行有先后     并列就是同时执行
		$(".bus").animate({left:'-50%'},2000,function(){
			$(".avater").animate({left:'40%'},2000,function(){
				//淡出
				$(".station").fadeOut(1);
				$(".avater").fadeOut(1);
				$(".title").fadeOut(1,function(){
					//所有元素出去，加载第二个场景
					$(".teamBg").fadeIn(1,function(){
						$(".wall").fadeIn(1000);
						$(".teamAvater").fadeIn(1000);
						$(".txt01").fadeIn(1000);
					});
				});
			});
		});
		//$(".avater").animate({left:'40%'},2000);并列
	}
}
//点击事件
function light(img){
	img.src = "img/lightOn.png";
	$(".lightBg").fadeOut(100);
	$(".light").fadeOut(100);
	$(".onBg").fadeIn(1000);
}

//音乐按钮上的点击事件
function music(img){
	//获取歌曲
	var aud = document.getElementById("audio");
	//对歌曲状态进行判断   paused已经停止的歌曲， pause瞬间停止
	if (aud.paused) {
		//播放方法
		aud.play();
		img.src = "img/musicBtn.png";
	}else{
		//暂停
		aud.pause();
		img.src = "img/musicBtnOff.png";
	}
}
