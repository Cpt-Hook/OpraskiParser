chrome.browserAction.onClicked.addListener(function (tab) {
    convertPage(tab.id);
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.detectLanguage(tab.id, function(language) {
            newPageLoaded(tab.id, language);
        });
    }
});

function newPageLoaded(tabId, language) {
    chrome.storage.sync.get({
        option: "czech"
    }, function(items) {
        if(items.option === "always") convertPage(tabId);
        else if(items.option === "czech" && language === "cs") convertPage(tabId);
    });
}

function convertPage(id = null) {
    chrome.tabs.executeScript(id, {file: "lib/kotlin.js"});
    chrome.tabs.executeScript(id, {file: "lib/OpraskiParser.js"});
    chrome.tabs.executeScript(id, {file: "convertPage.js"});
}