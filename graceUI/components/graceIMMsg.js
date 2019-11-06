// graceUI/components/graceIMMsg.js
Component({

  properties: {
    msgs : {
      type : Array,
      value : [],
    },
    userid: {
      type: String,
      value: '-1',
    },
  },
  data: {
    player : null,
    playIndex : -1
  },
  created: function(){
    var _self = this;
    this.setData({ player: wx.getBackgroundAudioManager()});
    this.data.player.onPlay(() => { });
    this.data.player.onEnded(function(){
      var cIndex = _self.data.playIndex;
      _self.setData({ playIndex: -1});
      for (var i = cIndex + 1; i < _self.data.msgs.length; i++) {
        if (_self.data.msgs[i].ctype == 3) {
          _self.playNow(_self.data.msgs[i].msg, i);
          break;
        }
      }
    });
  },
  methods: {
    // 播放语音
    playVoice: function (e) {
      var voicelUrl = e.currentTarget.dataset.voice;
      var index = e.currentTarget.dataset.index;
      if (this.data.playIndex == -1) {
        return this.playNow(voicelUrl, index);
      }
      var _self = this;
      if (this.data.playIndex == index) {
        wx.getBackgroundAudioPlayerState({
          success(res) {
            const status = res.status
            switch (status) {
              case 0:
                _self.data.player.play();
                break;
              case 1:
                _self.data.player.pause();
                break;
              default:
                _self.data.player.play();
            }
          }
        });
      } else {
        this.data.player.stop();
        this.playNow(voicelUrl, index);
      }
    },
    // 语音播放基础函数
    playNow: function (voicelUrl, index){
      this.setData({ playIndex: index });
      this.data.player.src = voicelUrl;
      this.data.player.title = "graceUI";
      this.data.player.play();
      return true;
    },
    // 图片预览
    showImgs : function(e){
      var imgs        = [];
      var imgsCurrent = '';
      var imgIndex    = e.currentTarget.dataset.index;
      for (var i = 0; i < this.data.msgs.length; i++) {
        if (this.data.msgs[i].ctype == 2) {
          imgs.push(this.data.msgs[i].msg);
          if (imgIndex == i){ imgsCurrent =  this.data.msgs[i].msg;}
        }
      }
      wx.previewImage({ urls: imgs, current: imgsCurrent});
    }
  }
})
