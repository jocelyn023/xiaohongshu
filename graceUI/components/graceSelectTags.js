Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) { if (this[i] == val) return i; }
  return -1;
};
Component({
  properties: {
    type: { type: String, value : "" },
    items: { type: Array, value : [] },
    selectedColor : {type : String, value : "#3688FF"}
  },
  data: {
    tagsData: []
  },
  ready : function(){
    this.setData({tagsData : this.data.items});
  },
  methods: {
    graceSelectChange: function (e) {
      var checkVal = e.detail.value;
      for (var i = 0; i < this.data.tagsData.length; i++) {
        if (checkVal == this.data.tagsData[i].value) {
          this.data.tagsData[i].checked = true;
        } else {
          this.data.tagsData[i].checked = false;
        }
      }
      this.setData({ tagsData: this.data.tagsData});
      this.triggerEvent("change", checkVal);
    },
    graceCheckBoxChange: function (e) {
      var checkVal = e.detail.value;
      for (var i = 0; i < this.data.tagsData.length; i++) {
        if (checkVal.indexOf(this.data.tagsData[i].value) != -1) {
          this.data.tagsData[i].checked = true;
        } else {
          this.data.tagsData[i].checked = false;
        }
      }
      this.setData({ tagsData: this.data.tagsData });
      this.triggerEvent("change", checkVal);
    }
  }
})
