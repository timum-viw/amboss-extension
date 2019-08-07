var labsNode = document.createElement('div');
fetch(chrome.extension.getURL('/lab.html'))
    .then( res => res.text() )
    .then( html => labsNode.innerHTML = html )

labsNode.style.display = 'none'
labsNode.classList.add('side-labs')
document.getElementById("mainContent").appendChild(labsNode);

function toggleLabs() {
    labsNode.style.display === 'block' ? labsNode.style.display = 'none' : labsNode.style.display = 'block'
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        toggleLabs()
      }
    }
  );