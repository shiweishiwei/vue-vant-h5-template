const Mock = require('mockjs')

Mock.mock('/getData',function(options){
    return Mock.mock({
        'number':'10'
    })
})