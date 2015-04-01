function ajaxSubmit(url) {
  $.ajax({
    type: "POST",
    url: url,
    cache: false,
    async: false,
    success: function(msg) {
    }
  });
  document.forms[0].submit();
}

function confirmDelete(url) {
  ajaxSubmit(url);
}

$('a:contains("删除")').click()
