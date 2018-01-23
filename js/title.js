var OriginTitile = document.title;
var str;
document.addEventListener('visibilitychange', function() {
	if (document.hidden) {
		document.title = '・(PД`q｡)・゜別離開我~' + OriginTitile;
		clearTimeout(str);
	}else {
		document.title = 'ヽ(●´∀`●)ﾉ 歡迎回來！' + OriginTitile;
		str = setTimeout(function() {
			document.title = OriginTitile;
		}, 2000);
	}
});

