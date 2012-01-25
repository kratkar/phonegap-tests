x$(document).on('deviceready', function () {

  var file = x$('#recordFileName')[0].value, timeoutId;
  var mediaObject = new Media(file, function () {
        console.log('record complete')
        x$('#recordLog').html('record complete')
        x$('#playActionFileName').html('File: ' + file)
        x$('#playActions').css({ 'display' : 'block' })
      }, function () {
        console.log('record error')
        x$('#recordLog').html('Record error')
        x$('#playActions').css({ 'display' : 'none' })
  }), playObject;

  x$('#recordStart').on('touchstart', function () {
    x$('#recordLog').html('Start recording(10 sec. maximum)')
    console.log('Record start')
    mediaObject.startRecord();
    console.log('mediaObject.startRecord', m)
    var timeoutId = setTimeout(function () {
      //console.log('stop over 10 sec.')
      mediaObject.stopRecord();
      x$('#recordLog').html('Record stop 10 sec max!')
    }, 10000)
  });

  x$('#recordStop').on('touchstart', function () {
    console.log('stop record')
    mediaObject.stopRecord();
    clearTimeout(timeoutId);
    x$('#recordLog').html('Record stop!')
  })

  x$('#recordPlay').on('touchstart', function () {
    var $t = x$(this), action = $t.attr('data-action');
    if (action == 'play') {
      console.log('play')
      mediaObject.play()
      $t.attr('data-action', 'stop')
    }
    else {
      console.log('stop')
      mediaObject.stop()
      $t.attr('data-action', 'play')
    }
    var textButton = $t.attr('data-text'+action)
    $t.html(textButton);
    console.log(textButton)
  })
}, false)
