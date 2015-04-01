var page = require('webpage').create()

page.open('http://www.douban.com',function(status){
  console.log(status)
  page.open('http://www.baidu.com',function(status){
    console.log(status)
    page.evaluate(function(){
      window.history.go(-1)
    })
  })
})

setInterval(function(){
  console.log(page.url,page.canGoBack)
},1000)
