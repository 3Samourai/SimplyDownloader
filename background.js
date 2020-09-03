var def = 0;
function onExecuted(result)
{
    var medium = result[0][0].url;
    var hd = result[0][1].url;
if(def = "hd")
    {  
        //console.log(hd);
        browser.downloads.download({ url : hd, saveAs : true, filename : "SimplyDownloader.mp4" })
    }
    else
    {
             //console.log(medium);
             browser.downloads.download({ url : medium, saveAs : true, filename : "SimplyDownloader.mp4" })
    }
}
function onError(error)
{
    console.log(error);
}
/*
function onTest(h){
  console.log(h);
}
*/
function SaveMessage(message, sender)
  {
    console.log(message.url);
    def = message.def1;
    var hello = browser.tabs.executeScript({
        file:"YT.js"
  });
  hello.then(onExecuted,onError);
}
  
  browser.runtime.onMessage.addListener(SaveMessage)
