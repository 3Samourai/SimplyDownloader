function callback(tabs) {
  var def = document.getElementById("def").value;
  var currentTab = tabs[0]; // there will be only one in this array
  console.log(currentTab.url); // also has properties like currentTab.id
  browser.runtime.sendMessage({
    url:currentTab.url,
    def1:def
  });
};
function send()
{
  var query = { active: true, currentWindow: true };
  browser.tabs.query(query, callback);
};
document.querySelector("#btn").onclick = send;