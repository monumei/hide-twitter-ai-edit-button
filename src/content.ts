function updateState(enabled: boolean) {
  if (enabled) {
    document.body.classList.add('hide-grok-enabled');
  } else {
    document.body.classList.remove('hide-grok-enabled');
  }
}

// Initial check
chrome.storage.local.get(['hideEnabled'], (result) => {
  // Default to true if currently undefined, or match logic in popup
  const isEnabled = result.hideEnabled !== false;
  updateState(isEnabled);
});

// Listen for changes
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'local' && changes.hideEnabled) {
    updateState(changes.hideEnabled.newValue as boolean);
  }
});
