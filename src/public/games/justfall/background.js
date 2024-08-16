// open page when installed
chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === 'install') {
        chrome.tabs.create({
            url: "https://gnhustgames.github.io/"
        });
    }
});
//open page when unistalled
chrome.runtime.onInstalled.addListener(() => {
    // Set an uninstall URL
    chrome.runtime.setUninstallURL("https://gnhustgames.github.io/");
});
//open page when click extension
chrome.action.onClicked.addListener((tab) => {
    var newURL = chrome.runtime.getURL("index.html");
    chrome.tabs.create({ url: newURL });
});