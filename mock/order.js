const Mock = require('mockjs');

const data = Mock.mock({
  data: {
    "list|1-10": [{
      "orderId|1-10": /[a-zA-Z1-9]/,
      "num|1-8": /[1-9]/,
      "isReport": false,
      "title": "样本接收",
      "sendTime": "@date",
      "userName": "@name",
      "examname": "原溯450"
    }]
  },
  errorMessage: '',
  statusCode: '200'
})

module.exports = data