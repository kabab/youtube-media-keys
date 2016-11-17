chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query( {url: "*://*.youtube.com/watch*"} ,function (tabs) {
    console.log(command);
    var script = "next_video.js"
    if (command == "play-youtube") {
      var script = "play_pause.js";
    }
    for (var i = 0; i < tabs.length; i++) {
      console.log(script);
      chrome.tabs.executeScript(tabs[i].id, {file: script});
    }
  });
});
