// graceUI/components/graceDialog.js
Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    width: {
      type: String,
      value: '85%'
    },
    isCloseBtn: {
      type: Boolean,
      value: true
    },
    closeBtnColor: {
      type: String,
      value: '#F90000'
    },
    isTitle: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: ''
    },
    isBtns: {
      type: Boolean,
      value: true
    }
  },
  data: {

  },
  methods: {
    closeDialog: function () {
      this.triggerEvent('closeDialog');
    },
    stopFun: function () { }
  },
  options : {
    multipleSlots : true
  }
})
