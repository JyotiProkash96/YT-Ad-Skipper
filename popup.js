window.onload = function(){ 

    document.getElementById('de').onclick = function() {
        var enableDisable = document.getElementById('de').innerHTML;
       
        if (enableDisable == 'Disable') {
            document.getElementById('de').innerHTML = 'Enable';
        }
        else {
            document.getElementById('de').innerHTML = 'Disable';
        }
     };
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {TODO : 'change'});
    });
};