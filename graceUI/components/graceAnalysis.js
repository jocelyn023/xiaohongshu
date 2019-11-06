// graceUI/components/graceAnalysis.js
Component({
  properties: {
    article: {
      type  : Array,
      value : new Array()
    }
  },
  methods: {
    showImgs: function (e) {
      var currentUrl = e.currentTarget.dataset.url;
      var imgs = [];
      var items = this.data.article;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'img') {
          imgs.push(items[i].content);
        }
      }
      wx.previewImage({
        urls: imgs,
        current: currentUrl
      })
    }
  }
})
