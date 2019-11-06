// graceUI/components/gracePopupMenu.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    top: {
      type: Number,
      value: 0
    },
    bgColor: {
      type: String,
      value: '#F0F0F0'
    },
    menuWidth: {
      type: String,
      value: '258rpx'
    }
  },
  data: {

  },
  methods: {
    hideMenu: function () {
      this.triggerEvent('hideMenu');
    }
  }
})
