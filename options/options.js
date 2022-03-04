const timeOption = document.getElementById("time-option");
const saveBtn = document.getElementById("save-btn");

timeOption.addEventListener("change", (e) => {
  const val = e.target.value;
  if (val < 1 || val > 60) {
    timeOption.value = 25;
  }
});

saveBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    timeOption: timeOption.value,
    isRunning: false,
  });
});

chrome.storage.local.get(["timeOption"], (res) => {
  timeOption.value = res.timeOption;
});
