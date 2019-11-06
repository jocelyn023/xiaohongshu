Component({
  properties: {
    isCenter: {
      type: Boolean,
      value: false
    },
    currentIndex: {
      type: Number,
      value: 0
    },
    size: {
      type: Number,
      value: 120
    },
    items: {
      type: Array,
      value: function () {
        return []
      }
    },
    activeLineBg: {
      type: String,
      value: "linear-gradient(to right, #66BFFF,#3388FF)"
    },
    activeColor: {
      type: String,
      value: "#333333"
    },
    activeLineHeight: {
      type: String,
      value: '6rpx'
    },
    activeLineWidth: {
      type: String,
      value: "36rpx"
    },
    color: {
      type: String,
      value: "#333333"
    },
    margin: {
      type: Number,
      value: 0
    },
    textAlign: {
      type: String,
      value: 'left'
    },
    lineHeight: {
      type: String,
      value: '50rpx'
    },
    fontSize: {
      type: String,
      value: '28rpx'
    },
    padding : {
      type: String,
      value: '0rpx'
    }
  },
  methods: {
    navchang: function (e) {
      this.triggerEvent('change', Number(e.currentTarget.dataset.index))
    }
  }
})
