import './popup.css';

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('hideToggle') as HTMLInputElement | null;
  
  if (!toggle) {
    console.error('Toggle element not found');
    return;
  }

  // Load saved state
  chrome.storage.local.get(['hideEnabled'], (result) => {
    toggle.checked = result.hideEnabled !== false; // Default to true if not set
  });

  // Save state on change
  toggle.addEventListener('change', () => {
    const isEnabled = toggle.checked;
    chrome.storage.local.set({ hideEnabled: isEnabled });
  });
});
