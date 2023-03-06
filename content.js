var selectedText = '';


document.addEventListener('mouseup', function() {
  selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    var words = selectedText.split(/\s+/).length;
    alert('Selected text contains ' + words + ' words.');
    document.designMode = "on";
    document.execCommand("HiliteColor", false,);
    document.designMode = "off";
  }
});


chrome.runtime.onConnect.addListener(function(port) {
  if (port.name == "popup") {
    port.onDisconnect.addListener(function() {
      document.designMode = "on";
      document.execCommand("removeFormat", false, "BackColor");
      document.designMode = "off";
      selectedText = '';
    });
  }
});

