// Get the iframe element
var iframe = document.querySelector('iframe');

// Ensure the iframe is loaded before accessing its content
iframe.onload = function() {
    alert('test');
    // Access the iframe's document
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Use querySelector to find the textarea within the iframe
    var textarea = iframeDocument.querySelector('textarea');

    // Set focus on the textarea
    if (textarea) {
        textarea.focus();
    } else {
        console.log('Textarea not found');
    }
};

