x$(document).on('deviceready', function () {
  x$('#record_start').on('touchstart', function () {
    x$('#record_message').html('Start recording(10 sec. maximum)').css({ 'display' : 'block' })
    var file = '/record_1.mp3'
    var m = new Media(file, function () {
      x$('#record_log').html('Record complete')
    }, function () {
      x$('#record_log').html('Record failed')
    })
    m.startRecord();
    setTimeout(function () {
      m.stopRecording();
      x$('#record_log').html('Record stop 10 sec max!')
    }, 10000)
  })
  x$('#record_stop').on('touchstart', function () {
      m.stopRecording();
      x$('#record_log').html('Record stop!')
  })
}, false)
