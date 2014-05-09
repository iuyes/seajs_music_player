define(function (require, exports, module) {
	var currentMp3Index = 0;
	var $ = require('$');
	var mp3List = require("mp3List");
	var $mp3PlayerContainer = $("#mp3PlayerContainer"), mp3Data;
	module.exports = {
		init: function (data) {
			var me = this;
			mp3Data = data;
			mp3List.init(data);
			$("#prev").click($.proxy(me.prev, this));
			$("#next").click($.proxy(me.next, this));
			$("#list").on("click", "li", function () {
				currentMp3Index = $(this).index();
				me._createMp3PlayerAndPlayOneSong();
				mp3List.update(currentMp3Index);
			});
			me._createMp3PlayerAndPlayOneSong();
		},
		_createMp3PlayerAndPlayOneSong: function () {
			alert(currentMp3Index);
			$mp3PlayerContainer.html('<a class="media">歌名:' + mp3Data[currentMp3Index].title + '</a>');
			$('.media').media({
				autoplay: 1,
				width: 300,
				height: 20,
				src: '/seajs/js/JqueryMedia/mediaplayer.swf?file=' + mp3Data[currentMp3Index].src
			});
			mp3List.update(currentMp3Index);
		},
		next: function () {
			var me = this;
			if (currentMp3Index < mp3Data.length - 1) {
				currentMp3Index++;
				me._createMp3PlayerAndPlayOneSong();
			} else {
				alert("已是最后一首");
			}
		},
		prev: function () {
			var me = this;
			if (currentMp3Index > 0) {
				currentMp3Index--;
				me._createMp3PlayerAndPlayOneSong();
			} else {
				alert("已是第一首");
			}
		}
	}
});