//Create by (https://gist.github.com/geuis/8b1b2ea57d7f9a9ae22f80d4fbf5b97f)
//Modify by 3Samourai
(async () => {
  html = await fetch(window.location.href).then(resp => resp.text()).then(text => text);
  startStr = 'ytplayer.config = {';
  start = html.indexOf(startStr) + startStr.length - 1;
  end = html.indexOf('};', start) + 1;
  playerObj = JSON.parse(html.slice(start, end));
  playerObj.args.player_response = JSON.parse(playerObj.args.player_response);
  videoUrls = playerObj.args.player_response.streamingData.formats;
  return videoUrls;
})();
