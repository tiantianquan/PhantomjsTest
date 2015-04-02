var page = require('webpage').create()

// page.addCookie({
//   "domain": "localhost",
//   'path': '/',
//   "name": "0aa55ce5",
//   "value": "4"
// })

// page.addCookie({
//   "domain": "localhost",
//   'path': '/',
//   "name": "4a4825ae",
//   "value": "2074408"
// })

// page.addCookie({
//   "domain": "localhost",
//   'path': '/',
//   "name": "8da78472",
//   "value": "1955213721"
// })
// page.addCookie({
//   "domain": "localhost",
//   'path': '/',
//   "name": "091ac603",
//   "value": "%e5%86%85%e7%bd%ae%e7%ae%a1%e7%90%86%e5%91%98"
// })
// page.addCookie({
//   "domain": "localhost",
//   'path': '/',
//   "name": "ASP.NET_SessionId",
//   "value": "nnmsbdvitqoq4euciiamejcn"
// })

// page.addCookie({
//   "domain": "localhost",
//   'path': '/',
//   "name": "e3e3ca0c",
//   "value": "admin"
// })

phantom.cookies = [{
  "domain": ".localhost",
  "httponly": false,
  "name": "e3e3ca0c",
  "path": "/",
  "secure": false,
  "value": "admin"
}, {
  "domain": ".localhost",
  "httponly": false,
  "name": "ASP.NET_SessionId",
  "path": "/",
  "secure": false,
  "value": "nnmsbdvitqoq4euciiamejcn"
}, {
  "domain": ".localhost",
  "httponly": false,
  "name": "091ac603",
  "path": "/",
  "secure": false,
  "value": "%e5%86%85%e7%bd%ae%e7%ae%a1%e7%90%86%e5%91%98"
}, {
  "domain": ".localhost",
  "httponly": false,
  "name": "8da78472",
  "path": "/",
  "secure": false,
  "value": "1955213721"
}, {
  "domain": ".localhost",
  "httponly": false,
  "name": "4a4825ae",
  "path": "/",
  "secure": false,
  "value": "2074408"
}, {
  "domain": ".localhost",
  "httponly": false,
  "name": "0aa55ce5",
  "path": "/",
  "secure": false,
  "value": "4"
}]

page.open('http://localhost:6013/FrameForm.aspx', function(status) {
  console.log(status, JSON.stringify(page.cookies))
  page.render('cookie.png')
    // if (status === 'success') {
    //   page.uploadFile('input[name=FileUpload1]', 'deletesubject.js')
    //   page.evaluate(function() {
    //     document.querySelector('#Button1').click()
    //   })
    // }

})
