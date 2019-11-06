/*
graceUI-JS - 网络请求工具
link : graceui.hcoder.net
author : 5213606@qq.com 深海
*/

module.exports = {
	
	get : function(url, data, callback){
		wx.request({
			url      : url,
			data     : data,
			method   : "GET",
			dataType : "json",
			success  : (res) => {callback(res.data);},
			fail     : () => {wx.showToast({title:"网络请求失败", icon:"none"});}
		});
	},
	
	post : function(url, data, contentType, headers, callback){
		switch(contentType){
			case "form" :
				var headerObj = {'content-type' : 'application/x-www-form-urlencoded'};
			break;
			case "json" : 
				var headerObj = {'content-type' : 'application/json'};
			break;
			default :
				var headerObj = {'content-type' : 'application/json'};
		}
		for(let k in headers){headerObj[k] = headers[k];}
		wx.request({
			url      : url,
			data     : data,
			method   : "POST",
			dataType : "json",
			header   : headerObj,
			success  : (res) => {callback(res.data);},
			fail     : () => {wx.showToast({title:"网络请求失败", icon:"none"});}
		});
	}
}