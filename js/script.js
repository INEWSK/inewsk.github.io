/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

$(document).ready(function(){
        var getHitokoto=function(){
		$.ajax({  
		     type : "get",  
		     async: false,  
		     url : "http://api.hitokoto.us/rand?encode=jsc",  
		     dataType : "jsonp",  
		     jsonp: "fun", 
		     jsonpCallback:"hitokoto",  
		     success : function(json){
			var html="<span class='hitokoto' title='";
			html+="分類："+json.catname+"&#10;";
			html+="出自："+json.source+"&#10;";
			html+="喜歡："+json.like+"&#10;";
			html+="投稿："+json.author+" @ "+json.date+"'>";
			html+="<a href='http://hitokoto.us/view/"+json.id+"' target='_blank'>";
			html+=json.hitokoto;
			html+="</a></span>";
			$("#hitokoto").html(html); 
		     },  
		     error:function(e){
		        alert('Opps,I met some problems');  
		     }  
		 });
	}
	var list=["about","link"];
	var opened="none";
	var container=$("#textdiv");
	$.each(list,function(){
		$("#"+this).click(function(e){
			var id=e.target.id;
			container.toggle(100,function(){
				if(opened==id){
					container.hide();
					opened="none";
				}else{
					if(opened!="none"){
						container.hide();
					}
					container.html($("#"+id+"div").html()).show();
					opened=id;
				}
			});
		});
	});
	getHitokoto();
    
	// 版權標記
	console.log("Dimpurr's Personal Card Theme")
	console.log('https://github.com/dimpurr/DimPage')
	console.log('http://dimpurr.com')
});
