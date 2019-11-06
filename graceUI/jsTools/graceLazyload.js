/**
懒加载
来自 grace.hcoder.net 
作者 hcoder 深海 5213606@qq.com
*/
var graceLazyWinHeight = 500;
var graceLazyTimer = null;
module.exports = {
	load : function(top, _page){
		if (graceLazyTimer != null){clearTimeout(graceLazyTimer);}
		graceLazyTimer = setTimeout(function(){
			wx.getSystemInfo({
				success: function(res) {
					graceLazyWinHeight = res.windowHeight;
					wx.createSelectorQuery().selectAll('.grace-img-lazy').fields(
						{
							rect: true,
						}, function (res) {
							//检查图片是否在窗口可视区域
							for (var i = 0; i < res.length; i++) {
								if (res[i].bottom <= graceLazyWinHeight + top) {
									_page.data.isShow[i] = true;
								} else {
									break
								}
							}
							_page.setData({ isShow: _page.data.isShow });
						}
					).exec();
				}
			});
		}, 100);
	}
}