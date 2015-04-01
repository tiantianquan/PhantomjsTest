var page = require('webpage').create()

// page.addCookie({
//   'name': 'JSESSIONID',
//   'value': '5415F18A32D729D9159486EA5AAB9D00',
//   'domain': '58.30.229.122'
// })

page.addCookie({
  "domain": "58.30.229.122",
  "httponly": false,
  "name": "JSESSIONID",
  "path": "/",
  "secure": false,
  "value": "5415F18A32D729D9159486EA5AAB9D00"
})

page.onResourceRequested = function(request) {}

page.onResourceReceived = function(response) {
  // console.log('URL:::' + page.url)
}

var url_1 = "http://58.30.229.122:8080/motor/car/car-declare-step32.action?declarecode=BJEPBDDC017821&cartype=DDC&standlevel=&standweight=111&category=&chosetype=2"
page.open(url_1, function(status) {
  page.render('eee.png')
  console.log(status, JSON.stringify(page.cookies))
  if (status === "success") {

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

        setTimeout(function() {
          console.log('1111:' + page.url, page.canGoBack)
          var content = page.content;
          console.log('Content: ' + content);
          page.evaluate(function() {
            var addscript = document.createElement('SCRIPT')
            addscript.innerText = 'window.history.go(-2)'
            document.body.appendChild(addscript)
          })
          setInterval(function() {
            console.log('1111:' + page.url, page.canGoBack)
          }, 1000)

        }, 2000)
      })
    }, 1000)

  }
})
