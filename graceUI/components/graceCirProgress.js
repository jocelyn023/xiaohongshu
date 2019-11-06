Component({
  properties: {
    width : {
      type : Number,
      value : 200
    },
    lineWidth: {
      type: Number,
      value: 10
    },
    bgColor:{
      type : String,
      value: "#F1F1F1"
    },
    progressColor:{
      type: String,
      value: "#00C777"
    },
    fontColor: {
      type: String,
      value: "#00C777"
    },
    value : {
      type : Number,
      value : 1
    },
    fontSize : {
      type: Number,
      value: 30
    },
    speed:{
      type: Number,
      value: 20
    }
  },
  data: {
    ctx : null
  },
  ready: function () {
    var _self       = this; 
    var sets        = {};
    sets.center     = this.data.width / 2; // 圆心
    sets.lineWidth = this.data.lineWidth; // 外层圆环宽
    sets.r = (this.data.width / 2) - (sets.lineWidth / 2); // 背景半径 = 外层
    sets.lineWidth2 = sets.lineWidth - 2; // 内层圆环宽
    this.setData({ctx : wx.createCanvasContext('canvasArc', this)});
    this.drawAnimate(this.ctx, sets, this.data.value);

    watch(this, {
      value: function (newVal) {
        _self.drawAnimate(_self.ctx, sets, newVal);
      }
    });
  },
  methods: {
    drawAnimate: function (ctx, sets, num){
      var _self = this; 
      var step = 0;
      if (_self.data.value > num) {
        for (var i = _self.data.value; i >= num; i--) {
          (function (i) {
            setTimeout(function () {
              _self.draw(_self.data.ctx, sets, i);
            }, step);
          }(i));
          step += _self.data.speed;
        }
      } else {
        for (var i = _self.data.value; i <= num; i++) {
          (function (i) {
            setTimeout(function () {
              _self.draw(_self.data.ctx, sets, i);
            }, step);
          }(i));
          step += _self.data.speed;
        }
      }
    },
    draw: function (ctx, sets, num){
      if (num < 0) { num = 0;}
      if(num > 100){num = 100;}
      // 背景圆
      ctx.setLineWidth(sets.lineWidth);
      ctx.setStrokeStyle(this.data.bgColor);
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(sets.center, sets.center, sets.r, 0, 2 * Math.PI, false);
      ctx.stroke();

      // 进度圆
      ctx.setLineWidth(sets.lineWidth2);
      ctx.setStrokeStyle(this.data.progressColor);
      ctx.setLineCap('round')
      ctx.beginPath();//开始一个新的路径
      num = num / 100;
      ctx.arc(sets.center, sets.center, sets.r, 0 * Math.PI, (2 * num * Math.PI), false);
      ctx.stroke();

      // 文字
      ctx.setFillStyle(this.data.fontColor);
      ctx.setFontSize(this.data.fontSize);
      ctx.setTextAlign("center");
      ctx.setTextBaseline('middle');
      ctx.fillText(Math.round(num * 100) + "%", sets.center, sets.center);
      ctx.draw();
    }
  }
});

function defineReactive(data, key, val, fn) {
  Object.defineProperty(data, key, {
    configurable: true,
    enumerable: true,
    get: function () {
      return val
    },
    set: function (newVal) {
      if (newVal === val) return
      fn && fn(newVal)
      val = newVal
    },
  })
}

function watch(ctx, obj) {
  Object.keys(obj).forEach(key => {
    defineReactive(ctx.data, key, ctx.data[key], function (value) {
      obj[key].call(ctx, value)
    })
  })
}
