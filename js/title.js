var OriginTitile = document.title;
var str;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		document.title = '(つд⊂)不要離開我~' + OriginTitile;
		clearTimeout(str);
	}else {
		document.title = '〣( ºΔº )〣歡迎回來！' + OriginTitile;
		str = setTimeout(function() {
			document.title = OriginTitile;
		}, 2000);
	}
	// 版權標記
	console.log("zhangdanteng's variable web title")
	console.log('http://www.zhangdanteng.com')
});

