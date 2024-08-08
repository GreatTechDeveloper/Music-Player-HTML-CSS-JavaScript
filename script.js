const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

// تنظیم مقدار اولیه نوار پیشرفت
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

// به‌روزرسانی نوار پیشرفت در حین پخش
song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

// پخش/موقف کردن صدا
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

// تغییر موقعیت پخش بر اساس نوار پیشرفت
progress.oninput = function () {
  song.currentTime = progress.value;
  // پخش صدا فقط اگر در حال حاضر پخش است
  if (!song.paused) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};

// حرکت به عقب و جلو
function moveBack() {
  song.currentTime -= 5;
}

function moveForward() {
  song.currentTime += 5;
}