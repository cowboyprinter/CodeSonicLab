// ===================================================
// CodeSonic Lab - FINAL STABLE SCRIPT
// ===================================================

document.addEventListener('DOMContentLoaded', function() {
    setupPlayground();
    setupCopyButtons();
    // Your milestone tracking functions can be called here if you still have them
    // setupMilestoneTracking();
    // markCompletedItems();
});

function setupPlayground() {
    // This function's only job is to load the default, blank Strudel environment.
    // All other complexity is removed.
    document.getElementById('strudel-frame').src = "https://strudel.cc/";
}



function setupCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const codeBlock = this.previousElementSibling;
            const codeToCopy = codeBlock.innerText;

            navigator.clipboard.writeText(codeToCopy).then(() => {
                this.innerText = 'Copied!';
                setTimeout(() => { this.innerText = 'Copy'; }, 2000);
            });
        });
    });
}