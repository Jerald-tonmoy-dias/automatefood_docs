"use strict"

var copyAnchors = document.querySelectorAll('a[data-clippy]');

var createCopyTextBox = function() {
  var copyTextBox = document.getElementById('clippy');

  if (copyTextBox === null) {

    var input = document.createElement('textarea');
    input.hidden = "hidden";
    input.id = 'clippy';

    document.body.appendChild(input);
  }
}

var findClippy = function() {
  return document.getElementById('clippy');
}

createCopyTextBox();

for (var i = 0; i < copyAnchors.length; ++i) {
  var item = copyAnchors[i];

  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    var clippy = findClippy();
    clippy.value = e.target.href;
    
    clippy.select();
    document.execCommand('copy');
    
    $.notify('Copied "' + clippy.value + '" to clipboard', 'success');

  });
}