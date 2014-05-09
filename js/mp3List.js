define(function (require, exports, module) {
	var data;
	var $ = require('$');
	var $listContainer = $("#list");
	module.exports = {
		init: function (d) {
			var me = this;
			data = d;
			me._createUI();
		},
		_createUI: function () {
			for (var i in data) {
				$listContainer.append("<li>" + data[i].title + "</li>")
			}
		},
		update: function (currentMp3Index) {
			var li = $listContainer.find("li");
			li.removeClass("curr");
			$(li.get(currentMp3Index)).addClass("curr");
		}
	};
});
