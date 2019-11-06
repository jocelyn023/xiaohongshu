// graceUI/components/graceNumberKeyboard.js
Component({
  properties: {
    show: {
      type: Boolean,
      value : false
    },
    doneBtnName: {
      type: String,
      value: "完成"
    }
  },
  data: {

  },
  methods: {
    inputNow: function (e) {
      var k = e.currentTarget.dataset.keynumber;
      this.triggerEvent('keyboardInput', k);
    },
    deleteNow: function () {
      this.triggerEvent('keyboardDelete');
    },
    done: function () {
      this.triggerEvent('keyboardDone');
    }
  }
})
