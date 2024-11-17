document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("intro-video");
    const videoContainer = document.getElementById("video-container");
    const mainContent = document.getElementById("main-content");
  
    // Плавное скрытие видео и показ основного контента после завершения видео
    video.addEventListener("ended", () => {
        videoContainer.classList.add("fade-out");
        mainContent.classList.add("fade-in");
  
        // Ждём завершения анимации перед скрытием видео
        setTimeout(() => {
            videoContainer.style.display = "none";
            mainContent.classList.remove("hidden");
        }, 1000); // Время ожидания совпадает с длительностью анимации
    });
  
    // Дополнительно: если видео не загружается в течение 10 секунд, пропускаем его
    setTimeout(() => {
        if (!video.paused && !mainContent.classList.contains("fade-in")) {
            videoContainer.classList.add("fade-out");
            mainContent.classList.add("fade-in");
  
            setTimeout(() => {
                videoContainer.style.display = "none";
                mainContent.classList.remove("hidden");
            }, 1000);
        }
    }, 10000);
  });
  



  