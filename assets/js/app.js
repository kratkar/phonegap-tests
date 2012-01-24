x$(document).on('deviceready', function () {
  var file = '/record1.mp3';
  var m = new Media(file, function () {
        //console.log('record complete')
        x$('#recordLog').html('Record complete')
        x$('#playActions').css({ 'display' : 'block' })
      }, function () {
        //console.log('record error')
        x$('#recordLog').html('Record error')
        x$('#playActions').css({ 'display' : 'none' })
  })
  x$('#recordStart').on('touchstart', function () {
    x$('#recordLog').html('Start recording(10 sec. maximum)')
    //console.log('Record start')
    m.startRecord();
    //console.log('m.startRecord', m)
    setTimeout(function () {
      //console.log('stop over 10 sec.')
      m.stopRecording();
      x$('#recordLog').html('Record stop 10 sec max!')
    }, 10000)
  });
  x$('#recordStop').on('touchstart', function () {
    //console.log('stop record')
    m.stopRecording();
    x$('#recordLog').html('Record stop!')
  })
  x$('#recordPlay').on('touchstart', function () {
    var $t = x$(this), action = $t.attr('data-action');
    if (action == 'play') {
      console.log('play')
      m.play()
      $t.attr('data-action', 'stop')
    }
    else {
      console.log('play')
      m.stop()
      $t.attr('data-action', 'play')
    }
    var textButton = $t.attr('data-text'+action)
    x$(this).html(textButton);
  })
}, false)
