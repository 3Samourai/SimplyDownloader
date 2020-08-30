//This is not my code it comes from 
//Source: (https://gist.github.com/geuis/8b1b2ea57d7f9a9ae22f80d4fbf5b97f)

(async () => {
    const html = await fetch(window.location.href).then((resp) => resp.text()).then((text) => text);
    const startStr = 'ytplayer.config = {';
    const start = html.indexOf(startStr) + startStr.length - 1;
    const end = html.indexOf('};', start) + 1;
    const playerObj = JSON.parse(html.slice(start, end));
  
    playerObj.args.player_response = JSON.parse(playerObj.args.player_response);
  
    const videoUrls = playerObj.args.player_response.streamingData.adaptiveFormats.reduce((acc, item) => {
      if (!acc[item.quality]) {
        acc[item.quality] = {};
      }
  
      const mimeType = item.mimeType.split(';')[0];
  
      acc[item.quality][mimeType] = item;
  
      return acc;
    }, {});
  
    console.log('!!', videoUrls);
    return(videoUrls);
  })();