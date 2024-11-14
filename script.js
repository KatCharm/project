document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const videoContainer = document.getElementById("video-container");
    const mainContent = document.getElementById("main-content");
  
    // Коли відео закінчується, ховаємо його та показуємо основний контент
    video.addEventListener("ended", function () {
      videoContainer.style.display = "none";
      mainContent.style.display = "block";
    });
  });
  



  