x$(document).on('deviceready', function () {

  var file, timeoutId;
  console.log('file = ' + file)
  var mediaObject = new Media(file, function () {
        //console.log('record complete')
        x$('#recordLog').html('record complete')
        x$('#playActionFileName').html('File: ' + file)
        x$('#playActions').css({ 'display' : 'block' })
      }, function () {
        //console.log('record error')
        x$('#recordLog').html('Record error')
        x$('#playActions').css({ 'display' : 'none' })
  }), playObject;

  x$('#recordStart').on('touchstart', function () {
    file = x$('#recordFileName')[0].value
    x$('#recordLog').html('Start recording(10 sec. maximum)')
    //console.log('Record start')
    mediaObject.startRecord();
    //console.log('mediaObject.startRecord', m)
    var timeoutId = setTimeout(function () {
      //console.log('stop over 10 sec.')
      mediaObject.stopRecord();
      x$('#recordLog').html('Record stop 10 sec max!')
    }, 1000)
  });

  x$('#recordStop').on('touchstart', function () {
    //console.log('stop record')
    mediaObject.stopRecord();
    clearTimeout(timeoutId);
    x$('#recordLog').html('Record stop!')
  })

  x$('#recordPlay').on('touchstart', function () {
    var $t = x$(this), action = $t.attr('data-action');
    playObject = new Media(file, function () {
    }, function () {
    })
    if (action == 'play') {
      playObject.play()
      $t.attr('data-action', 'stop')
    }
    else {
      playObject.stop()
      $t.attr('data-action', 'play')
    }
    console.log('action = '+action)
    var textButton = $t.attr('data-text'+action)
    $t.html(textButton);
    console.log('textButton = ' + textButton)
  })
}, false)
