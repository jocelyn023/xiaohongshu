// graceUI/components/graceNubmerAnimate.js
Component({
  properties: {
    num: {
      type: Number,
      value: 0
    },
    stepNumber: {
      type: Number,
      value: 50
    },
    timer: {
      type: Number,
      value: 800
    },
    keepInt: {
      type: Boolean,
      value: false
    }
  },
  data: {
    numAnimate: 0,
    intervalId: null
  },
  ready: function (){
    console.log(this.data.num);
    let timer = this.data.timer / this.data.stepNumber;
    let step = Math.floor((this.data.num / this.data.stepNumber) * 100) / 100;
    this.data.intervalId = setInterval(() => {
      // 正值 
      if (this.data.num >= 0) {
        if (this.data.numAnimate >= this.data.num) {
          this.setData({numAnimate : this.data.num});
          clearInterval(this.data.intervalId);
          return;
        }
      } else {
        if (this.data.numAnimate <= this.data.num) {
          this.setData({ numAnimate: this.data.num });
          clearInterval(this.data.intervalId);
          return;
        }
      }
      let res = this.data.numAnimate + step;
      this.setData({numAnimate : this.data.keepInt ? parseInt(res) : Math.floor(res * 100) / 100});
    }, timer);
  }
})
