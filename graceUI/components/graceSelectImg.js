Component({
  properties: {
    maxFileNumber: {
      type  : Number,
      value : 9
    },
    btnName: {
      type  : String,
      value : "添加照片"
    }
  },
  data: {
    imgLists : []
  },
  methods: {
    addImg: function () {
      var _self = this;
      var num = this.data.maxFileNumber - _self.data.imgLists.length;
      if (num < 1) { return false; }
      wx.showLoading({ title: "" });
      wx.chooseImage({
        count: num,
        sizeType: ['compressed'],
        success: function (res) {
          _self.setData({ imgLists: _self.data.imgLists.concat(res.tempFilePaths)});
          _self.triggerEvent('change', _self.data.imgLists);
          wx.hideLoading();
        },
        fail: function () {
          wx.hideLoading();
        }
      });
    },
    removeImg: function (e) {
      var index = e.currentTarget.id.replace('grace-items-img-', '');
      this.data.imgLists.splice(index, 1)
      this.setData({ imgLists: this.data.imgLists});
      this.triggerEvent('change', this.data.imgLists);
    },
    showImgs: function (e) {
      var currentImg = e.currentTarget.dataset.imgurl;
      wx.previewImage({
        urls: this.data.imgLists,
        current: currentImg
      })
    }
  }
})
