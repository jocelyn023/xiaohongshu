Component({
  properties: {
    bgcolor: {
      type: String,
      value: '#FFFFFF'
    },
    isFixed: {
      type: Boolean,
      value: true
    }
  },
  data: {
    height: '0rpx'
  },
  ready : function(){
    console.log(1);
    var _self = this;
    wx.getSystemInfo({
      success: function (res) {
        var model = res.model
        if (model.search('iPhone X') != -1) {
          _self.setData({height : '68rpx'});
        }
      }
    });
  }
})
