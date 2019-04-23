const cloudclient = require('../../utils/cloudclient.js')
Page({
  data: {
    result: "",
  },

  onLoad: function (options) {
  },

  setResult(r) {
    console.log(r)
    this.setData({ result: JSON.stringify(r).replace(/{"/g, '{\n  "').replace(/}/g, '\n}').replace(/",/, '",\n')})
  },

  onButtonClick: function(e) {
    console.log('onButtonClick')
    cloudclient.callFunctionWithName('triggerpub', {type: 'all'}, this.setResult)
  },

  onDebugButtonClick: function(e) {
    console.log('onDebugButtonClick')
    cloudclient.callFunctionWithName('triggerpub', {}, this.setResult)
  }
})