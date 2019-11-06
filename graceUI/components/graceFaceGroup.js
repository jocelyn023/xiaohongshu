// graceUI/components/graceFaceGroup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    items: {
      type: Array,
      value : []
    },
    size: {
      type: Number,
      value: 80
    },
    space: {
      type: Number,
      value: 60
    },
    borderWidth: {
      type: Number,
      value: 4
    },
    borderColor: {
      type: String,
      value: '#F5F5F5'
    },
    isAddBtn: {
      type: Boolean,
      value: false
    }
  },
  data: {

  },
  methods: {
    addBtnClick: function () {
      this.triggerEvent('addBtnClicked');
    }
  }
})
