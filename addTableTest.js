var page = require('webpage').create()

page.addCookie({
  'name': 'JSESSIONID',
  'value': '5415F18A32D729D9159486EA5AAB9D00',
  'domain': '58.30.229.122'
})

var url_1 = 'http://58.30.229.122:8080/motor/part/carpart!input.action?partcode=88c2ff48-6be4-45b9-901b-6dd2ed197767&declarecode=BJEPBQQC017830&cartype=QQC&standlevel=4&standweight=123&category=1'

page.open(url_1,function(status){
  console.log(status)
  page.evaluate(function(){
    $('input[type="text"]').val(111)
    $('tr.Convert').find('a').click()
    $('[name="componentList[101].position"]').val(222)
    $('[name="componentList[101].partmode"]').val(222)
    $('[name="componentList[101].producer"]').val(222)
    $('#inputForm').submit()
  })

  setInterval(function(){
    console.log('url:::'+page.url)
  },1000)
})