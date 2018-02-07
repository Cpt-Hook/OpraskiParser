function getOpraskiString(message) {
    return OpraskiParser.main.OpraskiParser.getOpraskiString_61zpoe$(message);
}

function convertText(node){
    node = node || document.body; // base node
    let children = node.childNodes;
    let i = 0;

    while(node = children[i]){
        if (node.nodeType === 3){ // text node found, do the replacement
            node.textContent = getOpraskiString(node.textContent);
        } else { // not a text mode, look forward
            convertText(node);
        }
        i++;
    }
}

function convertToOprasakiPage() {
    convertText();
    console.log("Page converted to Opraski text!");
}

convertToOprasakiPage();


