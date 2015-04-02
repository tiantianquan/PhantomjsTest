var page = require('webpage').create()

page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36'

phantom.addCookie({
  'name': 'JSESSIONID',
  'value': '647B6B722B7842B3B632C503C4B8A372',
  'domain': '58.30.229.122',
  'path': '/motor',
  // 'httponly': false,
  // 'secure': false,
  // 'expires': (new Date()).getTime() + (1000 * 60 * 60),
})

page.viewportSize = {
  width: 1920,
  height: 1080
}

page.onResourceRequested = function(request) {};

page.onResourceReceived = function(response) {
  console.log('URL:::' + page.url)
};


page.open('http://58.30.229.122:8080/motor/car/car-declare-step1!input.action', function(status) {
  console.log(status, page.settings.userAgent)
  page.render('test1.png')
  if (status === "success") {
    var a = page.evaluate(function() {
      var carName = Math.round(Math.random() * 1000)

      $('#RadioGroup1_1').attr('checked', true)
      $('#car').val(carName)

    });
    page.render('test2.png')
    page.evaluate(function() {
      $('#inputform').submit()
    })



    // page.onUrlChanged = function(targetUrl) {
    //   setTimeout(function() {
    //     page.open(page.url, function(status) {
    //       console.log(status, page.url)
    //       page.render('e.png')
    //       if (status === "success") {
    //         page.evaluate(function() {
    //           $('#sq').val('111111111111111111111111111')
    //           $('#sq').click()
    //           nextStep()
    //         })
    //       }
    //     })
    //   }, 1000)
    // }

  }
});


page.onUrlChanged = function(targetUrl) {
  var u = page.url.split('/')[5].split('!')[0].split('car-declare-step')[1]
  setTimeout(function() {
    page.open(page.url, function(status) {
      console.log(status, page.url)
      if (status === "success") {
        if (page.url.split('?')[0] === 'http://58.30.229.122:8080/motor/car/car-declare-step32.action') {

          page.onUrlChanged = function() {}
          addUrl = page.evaluate(function() {
            var addnew_1 = $('.addnew')
            var url_1 = addnew_1[0].onclick.toString().split('\'')
            return url_1
          })
          console.log(addUrl[1])

          setTimeout(function() {
            page.open('http://58.30.229.122:8080' + addUrl[1], function(status) {
              console.log(status, page.url)
              page.evaluate(function() {
                for (var i = 0; i < 3; i++) {
                  $('[name="dataList[' + i + '].value"]').val(111)
                  $("#inputForm").submit()
                }
              })
            })
          }, 1000)

        } else
          var s = page.evaluate(testFun['pagefill' + u])
      }
    })
  }, 1000)
}

var testFun = {};
testFun.pagefill1 = function() {
  var carName = Math.round(Math.random() * 1000)

  $('#RadioGroup1_1').attr('checked', true)
  $('#car').val(carName)
  formSubmit()
}

testFun.pagefill2 = function() {
  $('#sq').val('111111111111111111111111111')
  $('#sq').click()
  nextStep()
}

testFun.pagefill31 = function() {
  $('[name="maxspeed"]').val('111')
  $('[name="standweight"]').val('111')
  $('[name="carname"]').val('111')
  $('[name="maxweight"]').val('111')
  $('[name="seats"]').val('111')
  nextStep()
}

testFun.pagefill32 = function() {
  var addnew_1 = $('.addnew')
  var url_1 = addnew_1[0].onclick.toString().split('\'')
  return url_1
}
