// graceUI/components/graceIMFooter.js
Component({
  properties: {

  },
  data: {
    recShow : false,
    recTxt: "请点击绿色按钮开始录音",
    inputMsg: "",
    recorderManager : null,
    recing : false,
    tmpVoice : null,
    voiceLen : 0
  },
  created : function(){
    var _self = this;
    this.setData({ recorderManager: wx.getRecorderManager()});
    this.data.recorderManager.onStop((res) => {
      var voiceLen = Math.round(res.duration / 1000);
      _self.setData({ tmpVoice: res.tempFilePath, voiceLen: voiceLen });
      _self.setData({ recTxt: "待发送录音 : " + voiceLen + " 秒" });
    });
    this.data.recorderManager.onError(function () {
      wx.showToast({ title: '录音失败', icon: 'none' });
      _self.setData({ recing: false });
    });
  },
  methods: {
    // 录音
    rec : function(){
      if (this.data.recing) {
        this.data.recorderManager.stop();
        this.setData({ recing: false });
      } else {
        this.data.recorderManager.start({ duration: 60000, format: 'mp3' });
        this.setData({recing: true, voiceLen: 0, recTxt: "... 正在录音 ..." });
      }
    },
    // 发送录音
    sendVoiceMsg : function(){
      if (this.data.voiceLen < 1) {
        wx.showToast({ title: "请先录制一段语音", icon: "none" });
        return;
      }
      this.triggerEvent('sendVoiceMsg', [this.data.tmpVoice, this.data.voiceLen]);
      this.setData({ voiceLen: 0, recShow: false});
    },
    // 展示录音界面
    showRec : function(){
      this.setData({ recShow: true});
    },
    // 关闭录音界面
    closeRec: function () {
      this.setData({ recShow: false});
    },
    // 发送文本消息
    sendTextMsg: function (e) {
      var msgText = e.detail.value;
      if (msgText.length < 1) { return false; }
      this.setData({ inputMsg: '' });
      this.triggerEvent("sendTextMsg", msgText);
    },
    // 选择图片
    chooseImg : function(){
      var _self = this;
      wx.showLoading({});
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: function(res){_self.triggerEvent("sendImgMsg", res.tempFilePaths[0]);},
        complete: function(){wx.hideLoading();}
      });
    }
  }
})