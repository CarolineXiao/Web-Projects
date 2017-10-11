// Write a JavaScript program to rotate the string 'Caroline' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function animate_string(id) {
  var element = getElementById(id);
  var textNode = element.childNodes[0];
  var text = textNode.data;
}

setInterval(function() {
  text = text[text.length-1] + text.substring(0, text.length-1);
  textNode.data = text;
}, 100);
)
