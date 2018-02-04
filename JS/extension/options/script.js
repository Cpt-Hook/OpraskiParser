window.onload = function () {
  document.getElementById("submitBtn").onclick = saveOptions;
  restoreOptions();
};

function saveOptions() {
    let radios = document.querySelector('input[name="options"]:checked').value;

    chrome.storage.sync.set({
        option: radios,
    }, function() {
        let status = document.getElementById('status');
        status.textContent = 'Options saved';
        setTimeout(function() {
            status.textContent = '';
        }, 1000);
    });
}

function restoreOptions() {
    chrome.storage.sync.get({
        option: "czech"
    }, function(items) {
        if (items.option === "always") {
            document.getElementById("alwaysCheck").checked = true;
        } else if (items.option === "czech") {
            document.getElementById("czechCheck").checked = true;
        } else if (items.option === "never") {
            document.getElementById("neverCheck").checked = true;
        }
    });
}