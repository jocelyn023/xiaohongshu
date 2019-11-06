// graceUI/components/graceSlider.js
Component({
  properties: {
		min: {
			type: Number,
			value: 0
		},
		max: {
			type: Number,
			value: 100
		},
		min1 :{
			type: Number,
			value: 0
		},
		max1: {
			type: Number,
			value: 50
		},
		min2: {
			type: Number,
			value: 50
		},
		max2: {
			type: Number,
			value: 100
		},
		val1: {
			type: Number,
			value: 0
		},
		val2: {
			type: Number,
			value: 50
		},
		blockColor : {
			type : String,
			value : "#FFFFFF"
		},
		bgColor:{
			type: String,
			value: "#F2F3F4"
		}
  },
	ready:function(){
		this.setData({ min1: this.data.min, max1: this.data.max / 2, min2: this.data.max / 2, max2 : this.data.max});
	},
  data: {
		
  },
  methods: {
		change1 : function(e){
			this.setData({ val1 : e.detail.value});
			this.changeBase();
		},
		change2: function (e) {
			this.setData({ val2: e.detail.value });
			this.changeBase();
		},
		changeBase: function () {
			var v1 = this.data.val1;
			var v2 = this.data.val2;
			this.triggerEvent('sliding', { min: this.data.val1, max: this.data.val2 });
		}
  }
})
