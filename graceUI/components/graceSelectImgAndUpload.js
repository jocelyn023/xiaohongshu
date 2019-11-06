// graceUI/components/graceSelectImgAndUpload.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    maxFileNumber: {
      type: Number,
      value : 9
    },
    btnName: {
      type: String,
      value: "添加照片"
    },
    items: {
      type: Array,
      value : []
    },
    uploading: {
      type: Boolean,
      value: false
    },
    uploadServerUrl: {
      type: String,
      value: ""
    },
    canadd: {
      type: Boolean,
      value: true
    }
  },
  data: {
    imgLists: [],
    uploadindex: 0
  },
  ready : function(){
    this.setData({imgLists : this.data.items});
  },
  /**
   * 组件的方法列表
   */
  methods: {
    startUploading : function(){
      this.upload(this, 0);
    },
    upload: function (_self, index) {
      if (index > (_self.data.imgLists.length - 1)) {
        //全部上传完成
        var uploadedims = [];
        _self.data.imgLists.forEach(function (item, k) {
          uploadedims.push(item.url);
        });
        this.triggerEvent('uploaded', uploadedims);
        return;
      }
      var tmpImg = _self.data.imgLists[index];
      if (tmpImg.progress != 0) {index++; _self.upload(_self, index); return;}
      // 检查上传域名
      if (_self.data.uploadServerUrl == '') { wx.showToast({ title: "请设置上传服务器地址", icon: "none" }); return; }
      // 创建上传对象
      const task = wx.uploadFile({
        url: _self.data.uploadServerUrl,
        filePath: tmpImg.url,
        name: 'img',
        success: function (uploadRes) {
          uploadRes = JSON.parse(uploadRes.data);
          if (uploadRes.status != 'ok') {
            _self.resetprogress(index);
            wx.showToast({ title: uploadRes.data, icon: "none" });
            _self.uploadFail();
          } else {
            //上传图片成功
            _self.data.imgLists[index].url = uploadRes.data;
            _self.setData({ imgLists: _self.data.imgLists });
            setTimeout(function () { index++; _self.upload(_self, index); }, 1000);
          }
        },
        fail: function (e) {
          _self.resetprogress(index);
          wx.showToast({ title: "上传图片失败,请重试", icon: "none" });
          _self.uploadFail();
        }
      });
      task.onProgressUpdate(function (res) {
        _self.data.imgLists[index].progress = res.progress;
        _self.setData({ imgLists: _self.data.imgLists });
      });
    },
    addImg: function () {
      var _self = this;
      var num = this.data.maxFileNumber - this.data.imgLists.length;
      if (num < 1) { return false; }
      wx.showLoading({ title: "" });
      wx.chooseImage({
        count: num,
        sizeType: ['compressed'],
        success: function (res) {
          res.tempFilePaths.forEach(function (imgs, index) {
            _self.data.imgLists.push({
              url: imgs,
              progress: 0
            });
          });
          _self.setData({ imgLists: _self.data.imgLists});
          _self.triggerEvent('change', _self.data.imgLists);
          wx.hideLoading();
        },
        fail: function () {
          wx.hideLoading();
        }
      });
    },
    removeImg: function (e) {
      console.log(e)
      var index = e.currentTarget.id.replace('grace-items-img-', '');
      this.data.imgLists.splice(index, 1);
      this.setData({ imgLists: this.data.imgLists });
      this.triggerEvent('change', this.data.imgLists);
    },
    showImgs: function (e) {
      var prvImgs = [];
      this.data.imgLists.forEach(function (item, key) {
        prvImgs.push(item.url);
      });
      var currentImg = e.currentTarget.dataset.imgurl;
      wx.previewImage({
        urls: prvImgs,
        current: currentImg
      })
    },
    uploadFail: function () {
      this.triggerEvent('uploaderror');
    },
    //重置进度
    resetprogress: function (index) {
      setTimeout(() => { this.data.imgLists[index].progress = 0; this.setData({imgLists : this.data.imgLists});}, 1000);
    }
  }
})
