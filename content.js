chrome.runtime.sendMessage({show: "showPageAction"});
window.onload = function(){ 
    
var adVideo = document.getElementsByClassName('video-ads ytp-ad-module');
var skipButton = document.getElementsByClassName('ytp-ad-skip-button ytp-button');
var firstAd = document.getElementsByClassName('ytp-ad-text');
    
 function clickSkipBtn() {
     if(skipButton[0] && skipButton.length > 0) {
        skipButton[0].click();
     }
 };
    setInterval(function(){
        if (adVideo && adVideo.length > 0) {
            clickSkipBtn();
             skipFirstInner(function() {
             if((firstAd && firstAd[2] && firstAd[2].innerHTML.includes('Ad')) ||
                (firstAd && firstAd[1] && firstAd[1].innerHTML.includes('Ad')) ||
                (firstAd && firstAd[0] && firstAd[0].innerHTML.includes('Ad'))) {
                clickSkipBtn();
                document.querySelector('video').currentTime = document.querySelector('video').duration;
                }
            });
        }
    }, 1);
 
}