/*
ORIGINAL AUTHOR: Kelrhys
UPDATED BY: Exosphere
Contains: 1 alias

This is an updated version of Log.txt that lets you name your logs.

USAGE:

log clear       - Erases your current game log. Helps with lag.
log comm <name> - Download log of communication window
log <name>      - Download scrollback log into .html

Pattern: log
Execute the following javascript:
*/

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
  
switch (args[1]) {

  // Clear cached mud output - will reclaim memory and improve responsiveness
  case 'clear'    : 
    document.getElementById('mudoutput').innerHTML = ""; 
    break;

  // Download contents of communication window to file
  case 'comm' :
    download('Genesis_' +args['*']+' '+new Date().toLocaleDateString().replace('.','-').replace('.','-') +'.html', '<!DOCTYPE html><html><body style="font-family:Source Code Pro,monospace;color:#d0d0d0;background-color:#121212"><pre>' + document.getElementById('communication').innerHTML + '</pre></body></html>')
    break;

  // Download contents of main mud output window to file
  default:
    download('Genesis_log ' +args['*']+' '+new Date().toLocaleDateString().replace('.','-').replace('.','-') +'.html', '<!DOCTYPE html><html><body style="font-family:Source Code Pro,monospace;color:#d0d0d0;background-color:#121212"><pre>' + document.getElementById('mudoutput').innerHTML + '</pre></body></html>')
}