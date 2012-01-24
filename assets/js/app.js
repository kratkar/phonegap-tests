x$(document).on('deviceready', function () {
  x$('#record_start').on('touchstart', function () {
    x$('#record_log').html('Start recording(10 sec. maximum)')
    console.log('Record start')
    var file = '/record_1.mp3';
    var m = new Media(file, function () {
          console.log('record complete')
          x$('#record_log').html('Record complete')
        }, function () {
          console.log('record error')
          x$('#record_log').html('Record error')
    })
    m.startRecord();
    console.log('m.startRecord', m)
    setTimeout(function () {
      console.log('stop over 10 sec.')
      m.stopRecording();
      x$('#record_log').html('Record stop 10 sec max!')
    }, 10000)
  });
  x$('#record_stop').on('touchstart', function () {
      console.log('stop record')
      m.stopRecording();
      x$('#record_log').html('Record stop!')
  })
}, false)
