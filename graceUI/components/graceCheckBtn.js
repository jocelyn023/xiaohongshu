// graceUI/components/graceCheckBtn.js
Component({
  properties: {
    size: {
      type: Number,
      value : 38
    },
    color: {
      type: String,
      value: '#EEEEEE'
    },
    checked: {
      type: Boolean,
      value: false
    },
    checkedColor: {
      type: String,
      value: '#FF0036'
    },
    parameter: {
      type: Array,
      value: []
    }
  },
  methods: {
    changeStatus: function () {
      this.setData({ checked : !this.data.checked});
      this.triggerEvent('change', [this.data.checked, this.data.parameter]);
    }
  }
})
