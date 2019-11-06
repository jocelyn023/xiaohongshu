// graceUI/components/graceDrawer.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    direction: {
      type: String,
      value: 'left'
    },
    width: {
      type: String,
      value: '60%'
    }
  },
  data: {

  },
  methods: {
    closeDrawer: function () {
      this.triggerEvent('closeDrawer');
    },
    stopFun: function(){}
  }
})
