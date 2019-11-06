// graceUI/components/graceSpeaker.js
Component({
  properties: {
    msgs: {
      type: Array,
      value: function () { return []; }
    },
    iconClass: {
      type: String,
      value: ""
    },
    iconColor: {
      type: String,
      value: "#3688FF"
    },
    interval: {
      type: Number,
      value: 3000
    },
    vertical: {
      type: Boolean,
      value: true
    }
  }
})
