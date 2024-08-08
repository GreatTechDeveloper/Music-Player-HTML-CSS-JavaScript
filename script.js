const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");
const song = document.getElementById("song");

// هنگام لود شدن اولیه آهنگ
song.onloadedmetadata = function () {
  progress.value = song.currentTime;
  progress.max = song.duration;
};

// زمان تغییر آهنگ
song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

progress.oninput = function () {
  song.currentTime = progress.value;
  if (!song.paused) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
};

song.onended = function () {
  ctrlIcon.classList.remove("fa-pause")
  ctrlIcon.classList.add("fa-play")
}

function moveBack() {
  song.currentTime -= 5;
}

function moveForward() {
  song.currentTime += 5;
}
