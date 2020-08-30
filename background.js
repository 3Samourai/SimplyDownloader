var def = 0;
function onExecuted(result)
{
    var fullHd = result[0]["hd1080"]["video/mp4"]["url"];
    var medium = result[0]["medium"]["video/mp4"]["url"];
    var hd = result[0]["hd720"]["video/mp4"]["url"];
    console.log(result);
    if (def = "fullHd")
  {
     
    console.log(fullHd);
   /*
   
    */
      browser.downloads.download({ url : fullHd, saveAs : true, filename : "SimplyDownloader.mp4" })
  }
    else if(def = "medium")
    {
        //console.log(medium);
        browser.downloads.download({ url : medium, saveAs : true, filename : "SimplyDownloader.mp4" })
    }
    else if(def = "hd")
    {
        //console.log(hd);
        browser.downloads.download({ url : hd, saveAs : true, filename : "SimplyDownloader.mp4" })
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