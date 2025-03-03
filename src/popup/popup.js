document.addEventListener("DOMContentLoaded", () => {
  const soundToggle = document.getElementById("soundToggle");
  const whitelistToggle = document.getElementById("whitelistToggle");
  const whitelistInput = document.getElementById("whitelistInput");
  const addWhitelistButton = document.getElementById("addWhitelist");
  const whitelistElement = document.getElementById("whitelist");

  // Initialize the checkbox state
  chrome.storage.local.get(
    ["soundEnabled", "whitelistEnabled", "whitelist"],
    (data) => {
      soundToggle.checked = data.soundEnabled;
      whitelistToggle.checked = data.whitelistEnabled;
      whitelistToggle.disabled = !data.soundEnabled; // Disable whitelistToggle if soundToggle is false
      const whitelist = data.whitelist || [];
      whitelist.forEach((site) => {
        addWhitelistElement(site);
      });
    }
  );

  // Add event listener for the sound toggle checkbox
  soundToggle.addEventListener("change", () => {
    chrome.storage.local.set({ soundEnabled: soundToggle.checked }, () => {
      whitelistToggle.disabled = !soundToggle.checked; // Disable whitelistToggle if soundToggle is false
    });
  });

  // Add event listener for the whitelist toggle checkbox
  whitelistToggle.addEventListener("change", () => {
    chrome.storage.local.set(
      { whitelistEnabled: whitelistToggle.checked },
      () => {}
    );
  });

  // Add event listener for the whitelist button
  addWhitelistButton.addEventListener("click", () => {
    const site = extractDomain(whitelistInput.value.trim());
    if (site) {
      chrome.storage.local.get("whitelist", (data) => {
        const whitelist = data.whitelist || [];
        if (!whitelist.includes(site)) {
          whitelist.push(site);
          chrome.storage.local.set({ whitelist: whitelist }, () => {
            addWhitelistElement(site);
            whitelistInput.value = "";
          });
        }
      });
    }
  });

  // Set current tab URL to whitelist input on load
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    document.getElementById("whitelistInput").value = extractDomain(
      tabs[0].url
    );
  });
});

// Function to extract domain from URL
function extractDomain(url) {
  let hostname;
  // Find & remove protocol (http, https, ftp, etc.) and get hostname
  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  // Find & remove port number
  hostname = hostname.split(":")[0];
  // Find & remove "?"
  hostname = hostname.split("?")[0];
  return hostname;
}

// Function to add a site to the whitelist element
function addWhitelistElement(site) {
  const whitelistElement = document.getElementById("whitelist");
  const li = document.createElement("li");
  li.textContent = site;
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.addEventListener("click", () => {
    removeWhitelistItem(site, li);
  });
  li.appendChild(deleteButton);
  whitelistElement.appendChild(li);
}

// Function to remove a site from the whitelist
function removeWhitelistItem(site, listItem) {
  chrome.storage.local.get("whitelist", (data) => {
    let whitelist = data.whitelist || [];
    whitelist = whitelist.filter((item) => item !== site);
    chrome.storage.local.set({ whitelist: whitelist }, () => {
      listItem.remove();
    });
  });
}
