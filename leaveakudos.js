// guard against duplicate runs and only run if false
if (!window.__keyComboListenerAttached) {
    window.__keyComboListenerAttached = true;

    function fillTextField(text) {
        var textField = document.activeElement;

        if (textField.tagName.toLowerCase() == "textarea") {
            textField.value = textField.value + text;
        }
    }

    function detectKeyCombination(event) {
        if (event.ctrlKey && event.key === "y") {
            event.preventDefault();
            chrome.storage.sync.get('text', function (data) {
                var text = "<poll name='Kudos Footer' isanon='yes' whovote='all' whoview='all'><poll-question type='check' checkmin='0' checkmax='255'>Want to leave a Kudos?<poll-item>Kudos!</poll-item></poll-question></poll>";
                fillTextField(text);
            });
        }
    }

    document.addEventListener("keydown", detectKeyCombination, true);
}