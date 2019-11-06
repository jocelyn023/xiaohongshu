// graceUI/components/graceHeader.js
Component({
  properties: {
    background: {
      type: String,
      value: "#F8F8F8"
    },
    height: {
      type: Number,
      value: 44
    },
    haveStatusBar: {
      type: Boolean,
      value : true
    },
    isSeize: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value : 99
    }
  },
  data : {
    top : 0,
    BoundingWidth: '50px'
  },
  ready: function(){
    if (!this.data.haveStatusBar) { return; }
    var sys = wx.getSystemInfoSync();
    this.setData({ top : sys.statusBarHeight});
    var res = wx.getMenuButtonBoundingClientRect();
    this.setData({ BoundingWidth: (res.width + 20) + 'px'});
  }
})
