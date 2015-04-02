var page = require('webpage').create()

page.open('http://localhost:8493/Index.aspx', function(status) {
  console.log(status)
  if (status === 'success') {
    page.uploadFile('input[name=FileUpload1]', 'deletesubject.js')
    page.evaluate(function() {
      document.querySelector('#Button1').click()
    })
  }

})
