Component({
  properties: {
    width: {
      type: String,
      value: "100%"
    },
    height: {
      type: String,
      value: "300rpx"
    },
    swiperItems: {
      type: Array,
      value: []
    },
    borderRadius: {
      type: String,
      value: '5rpx'
    },
    indicatorColor: {
      type: String,
      value: "rgba(0, 0, 0, 0.2)"
    },
    indicatorActiveColor: {
      type: String,
      value: "#3688FF"
    },
    spacing: {
      type: String,
      value: "50rpx"
    },
    interval: {
      type: Number,
      value: 5000
    },
    padding: {
      type: String,
      value: '0 10rpx'
    },
    scale: {
      type: Boolean,
      value: true
    }
  },
  data: {
    current : 0
  },
  methods: {
    swiperchange: function (e) {
      this.setData({current : e.detail.current});
    }
  }
})
