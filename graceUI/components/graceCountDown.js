// graceUI/components/countdown.js
Component({
  properties: {
		bgrColor: {
			type: String,
			value: "#FFFFFF"
		},
		borderColor:{
			type:String,
			value : "#000000"
		},
		fontColor: {
			type: String,
			value: "#000000"
		},
		splitorColor: {
			type: String,
			value: "#000000"
		},
		timer:{
			type:String,
			vaule:""
		},
    d: {
      type: String,
      value: "00"
    },
		h:{
			type:String,
			value:"00"
		},
		i: {
			type: String,
			value: "00"
		},
		s: {
			type: String,
			value: "00"
		},
		leftTime: {
			type: Number,
			vaule:0
		},
    fontSize: {
      type: String,
      value: "22rpx"
    },
    width: {
      type: String,
      value: "40rpx"
    },
    splitorText: {
      type: Array,
      value: [':', ':', ':', '']
    }
  },
	data: {
    timer : null
  },
	ready: function(){
		var reg = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
		var res = this.data.timer.match(reg);
		if (res == null) {
			console.log('时间格式错误'); return false;
		}else{
			var year = parseInt(res[1]);
			if (year < 1000) { console.log('时间格式错误'); return false; }
			var month = parseInt(res[2]);
			var day = parseInt(res[3]);
			var h = parseInt(res[4]);
			if (h < 0 || h > 24) { console.log('时间格式错误'); return false; }
			var i = parseInt(res[5]);
			if (i < 0 || i > 60) { console.log('时间格式错误'); return false; }
			var s = parseInt(res[6]);
			if (s < 0 || s > 60) { console.log('时间格式错误'); return false; }
			var leftTime = new Date(year, month - 1, day, h, i, s);
			this.setData({ leftTime: leftTime });
			this.countDown(this);
			this.setInterValFunc(this);
		}
	},
  methods: {
		setInterValFunc:function(obj){
      obj.timer = setInterval(function(){ obj.countDown(obj);}, 1000);
		},
		countDown: function (self){
			var leftTime = self.data.leftTime - new Date();
			if (leftTime > 0) {
        var day = parseInt(leftTime / (1000 * 60 * 60 * 24));
        var hours = parseInt((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = parseInt((leftTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = parseInt((leftTime % (1000 * 60)) / 1000);	
			}else{
				var hours = 0, minutes = 0, seconds = 0;
        self.triggerEvent('endDo');
        clearInterval(self.timer);
			}
			if (hours < 10) { hours = '0' + hours;}
			if (minutes < 10) { minutes = '0' + minutes; }
			if (seconds < 10) { seconds = '0' + seconds; }
			self.setData({ h: hours, i: minutes, s: seconds , d:day});
		}
  }
})
