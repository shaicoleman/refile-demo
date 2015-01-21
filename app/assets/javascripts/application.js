//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require refile
//= require_tree .

$(document).on('upload:start', 'form', function(e) {
  $(this).find('input[type=submit]').attr('disabled', true)
});

$(document).on('upload:complete', 'form', function(e) {
  if(!$(this).find('input.uploading').length) {
    $(this).find('input[type=submit]').removeAttr('disabled')
  }
});
