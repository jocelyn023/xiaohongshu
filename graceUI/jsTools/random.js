/*
graceUI-JS - 随机数
link : graceui.hcoder.net
author : 5213606@qq.com 深海
*/
module.exports = {
	
	// 生成2数之间的随机数
	random : function(min, max){ 
		switch(arguments.length){ 
			case 1: 
				return parseInt(Math.random() * min + 1,10); 
			break;
			case 2: 
				return parseInt(Math.random() * (max - min + 1 ) + min, 10); 
			break;
			default: 
				return 0; 
			break; 
		}
	},
	
	// UUID
	uuid : function(len, radix){
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	    var uuid = [], i;
	    radix = radix || chars.length;
	    if(len){
	        for (i = 0; i < len; i++){
				uuid[i] = chars[0 | Math.random() * radix];
			}
	    }else{
	        var r;
	        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
	        uuid[14] = '4';
	        for(i = 0; i < 36; i++){
	            if (!uuid[i]){
	                r = 0 | Math.random() * 16;
	                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
	            }
	        }
	    }
	    return uuid.join('');
	}
}