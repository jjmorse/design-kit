//
// clipboard.js
// Modern copy to clipboard. No Flash. Just 3kb gzipped.
// https://github.com/zenorocha/clipboard.js/
//

var clipboard = new Clipboard('.clipboard');

// clipboard.on('success', function(e) {
//     console.info('Action:', e.action);
//     console.info('Text:', e.text);
//     console.info('Trigger:', e.trigger);
//
//     e.clearSelection();
// });

clipboard.on('success', function(e) {
  console.info('Text:', e.text);
  e.clearSelection();
});
