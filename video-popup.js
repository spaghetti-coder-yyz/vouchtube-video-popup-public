let is_open = false;

function closeVideoPopup() {
  document.getElementById("video-widget").style.display = "none";
  is_open = false;
  // document.getElementById("video-widget-icon").style.display = "block";
}

function openVideoPopup() {
  // Allow for closing the video popup when the widget icon is clicked
  if (is_open) {
    closeVideoPopup();
    is_open = false;
  } else {
    document.getElementById("video-widget").style.display = "flex";
    is_open = true;
  }
  // document.getElementById("video-widget-icon").style.display = "none";
}

// Test - Get window.variables set in master copy/paste script
console.log("cid: ", window.VOUCHTUBE_CONFIG.cid);
console.log("position: ", window.VOUCHTUBE_CONFIG.position);

// Open and close the video popup
console.log("Opened the popup");

// Does not seem to run here
// const openAndCloseVideoWidget = () => {
//   openVideoPopup();
//   setTimeout(() => {
//     closeVideoPopup();
//   }, 2500);
// };

// setTimeout(openAndCloseVideoWidget, 500);

// Only for codesandbox.io
const removeWatermark = () => {
  const ids = [];
  const iframes = document.body.querySelectorAll("iframe");
  for (const iframe of iframes) {
    if (iframe.id.startsWith("sb__open-sandbox")) ids.push(iframe.id);
  }
  for (const id of ids) {
    const node = document.createElement("div");
    node.style.setProperty("display", "none", "important");
    node.id = id;
    document.getElementById(id).remove();
    document.body.appendChild(node);
  }
};

setTimeout(removeWatermark, 1000);
