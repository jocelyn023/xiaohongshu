// graceUI/components/graceSegmentedControl.js
Component({
  properties: {
    items: {
      type: Array,
      value: new Array()
    },
    height: {
      type: String,
      value: '60rpx'
    },
    border: {
      type: String,
      value: '1px solid #3688FF'
    },
    color: {
      type: String,
      value: '#3688FF'
    },
    fontSize: {
      type: String,
      value: '28rpx'
    },
    current: {
      type: Number,
      value: 0
    }
  },
  methods: {
    changeSC: function (e) {
      this.triggerEvent('change', Number(e.currentTarget.dataset.index));
    }
  }
})
