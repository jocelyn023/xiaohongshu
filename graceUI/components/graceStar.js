// graceUI/components/graceStar.js
Component({
  properties: {
    fontSize: {
      type: String,
      value: '200%'
    },
    totalstars: {
      type: Number,
      value: 5
    },
    starnum: {
      type: Number,
      value: 0
    },
    color: {
      type: String,
      value: '#E1E1E1'
    },
    activecolor: {
      type: String,
      value: '#F5C359'
    },
    cantap: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    changnum: function (e) {
      if (!this.data.cantap) { return; }
      var val = e.currentTarget.dataset.val;
      this.setData({ value: val + 1 });
      this.triggerEvent("starChange", val + 1);
    }
  }
})
