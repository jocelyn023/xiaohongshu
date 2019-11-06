// graceUI/components/graceBottomDialog.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },
  data: {
    isIpx: false
  },
  methods: {
    closeDialog: function(){
      this.triggerEvent('closeDialog');
    },
    stopFun: function(){}
  },
  options: {
    multipleSlots: true
  },
  ready: function () {
    var _self = this;
    wx.getSystemInfo({
      success: function (res) {
        var model = res.model
        if (model.search('iPhone X') != -1) {
          _self.setData({ isIpx: true });
        }
      }
    })
  }
})
