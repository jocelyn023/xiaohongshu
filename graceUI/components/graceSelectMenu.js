Component({
  properties: {
    items: {
      type: Array,
      value: []
    },
    show: {
      type: Boolean,
      value: false
    },
    height: {
      type: Number,
      value: 300
    },
    color: {
      type: String,
      value: "#333333"
    },
    activeColor: {
      type: String,
      value: "#3688FF"
    },
    selectIndex: {
      type: Number,
      value: 0
    },
    currentIndex : {
      type: Number,
      value: 0
    }
  },
  data: {
    top: 0
  },
  methods: {
    showMenu: function () {
      var _self = this;
      wx.createSelectorQuery().in(this).select('#menuMain').fields(
        { rect: true }, function (res) {
          _self.setData({top : res.top});
        }
      ).exec();
      this.triggerEvent('showMenu');
    },
    close: function () {
      this.triggerEvent('close');
    },
    select: function (e) {
      var index = Number(e.currentTarget.dataset.index);
      this.setData({ currentIndex: index });
      this.triggerEvent('select', index);
      this.close();
    }
  }
})
