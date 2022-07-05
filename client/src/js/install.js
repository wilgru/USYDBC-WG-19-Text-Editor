const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Store the deferred prompt so that it can be accessed/triggered elsewhere on the page
window.addEventListener('beforeinstallprompt', (event) => window.deferredPrompt = event);

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    // get stored prompt event
    const promptEvent = window.deferredPrompt;

    // if prompt isnt available, then drop out
    if (!promptEvent) return;
  
    // trigger prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable in the window, as it can only be used once.
    window.deferredPrompt = null;
});

// handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
