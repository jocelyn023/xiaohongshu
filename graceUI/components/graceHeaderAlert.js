// graceUI/components/graceAlert.js
Component({
  properties: {
		show:{
			type : Boolean,
			value : false
		},
    background : {
      type : String,
      value: '#F1F2F3'
    },
    top: {
      type: Number,
      value: 5
    }
  },
  options: {
    multipleSlots: true
  }
})
