(function($) {
  navigator.usb.getDevices().then(devices => {
    devices.map(device => {
      console.log(device.productName);
      console.log(device.manufacturerName);
  });

  var ifMo = false;
  console.log(navigator);
  if (navigator.usb) {
    console.log(navigator.usb.getDevices);
  }

  window.addEventListener('blur', (event) => {
    console.log(event);
    event.preventDefault();
    if (ifMo) {
      console.log('click');
    }
  });

  $('#outer').mouseover(function() {
    console.log('outer mouseover');
    ifMo = true;
  })

  $('#outer').mouseout(function() {
    console.log('outer mouseout');
    ifMo = false;
  })

  $('#another').mouseover(function() {
    console.log('another mouseover');
  })

  $('#another').mouseout(function() {
    console.log('another mouseout');
  })
})(jQuery);

var frames = window.frames; // or // var frames = window.parent.frames;
for (var i = 0; i < frames.length; i++) { 
  // do something with each subframe as frames[i]
  frames[i].document.body.style.background = "red";
  console.log(frames[i]);
}

document.getElementsByTagName('iframe')[0].contentWindow.addEventListener('click', function(e) {
  console.log('iframe click', e);
})

