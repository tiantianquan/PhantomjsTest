var casper = require('casper').create({
  logLevel: 'debug', // Only "info" level messages will be logged
  verbose: true
})

// casper.on('resource.received', function(resource) {
//     this.echo('Resource ' + JSON.stringify(resource, undefined, 4),'INFO');
// });

//
casper.userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36')
phantom.addCookie({
  'name': 'JSESSIONID',
  'value': '5415F18A32D729D9159486EA5AAB9D00',
  'domain': '58.30.229.122'
})

casper.on('load.started', function() {

})

casper.on('url.changed', function(url) {
  casper.echo(url)
})



var inputUrl = 'http://58.30.229.122:8080/motor/car/car-declare-step1!input.action'

casper.start()

casper.thenOpen(inputUrl, function() {
  this.capture('aaa.png')
  this.echo(JSON.stringify(this.page.cookies))

  var a = this.evaluate(function() {
    return fill()
  })

  this.echo(a)


  // casper.waitForUrl(/http:\/\/58\.30\.229\.122:8080\/motor\/car\/car-declare-step2.*/, function() {
  //   this.echo(333333333333333333333333)
  // })
}).thenClick('[value="　创建申报 ＆ 下一步　"]', function() {
  this.wait(1000, function() {
    this.echo(this.getCurrentUrl())
  })
})

// casper.then(function() {
//   var a = this.evaluate(function() {
//     var carName = Math.round(Math.random() * 1000)
//     $('#RadioGroup1_1').attr('checked', true)
//     $('#car').val(carName)
//     $('#inputform').submit()
//     return $('#RadioGroup1_0').val()
//   })
//   this.echo(a)
// })

// casper.then(function() {
//   this.wait(1000, function() {
//     this.echo(casper.page.url)
//   })
// })

function fill() {
  var carName = Math.round(Math.random() * 1000)
  $('#RadioGroup1_1').attr('checked', true)
  $('#car').val(carName)
    // $('#inputform').submit()
  return $('#RadioGroup1_0').val()
}

casper.run();
