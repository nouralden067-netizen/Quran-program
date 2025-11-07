document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".fa-bars");
  const navLinks = document.querySelector(".nav-links");
  const sunIcon = document.querySelector(".fa-sun");
  const moonIcon = document.querySelector(".fa-moon");
  const body = document.body;

  if (!menuIcon || !navLinks) {
    console.warn("menuIcon or navLinks not found");
  } else {
    menuIcon.addEventListener("click", (e) => {
      navLinks.classList.toggle("active");
      menuIcon.classList.toggle("open");
      e.stopPropagation();
    });

    navLinks.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("open");
      });
    });

    document.addEventListener("click", (e) => {
      if (navLinks.classList.contains("active") && !navLinks.contains(e.target) && e.target !== menuIcon) {
        navLinks.classList.remove("active");
        menuIcon.classList.remove("open");
      }
    });
  }

  if (!sunIcon || !moonIcon) {
    console.warn("sunIcon or moonIcon not found");
  } else {
    const savedMode = localStorage.getItem("mode");

    if (savedMode === "light") {
      body.classList.add("light-mode");
      sunIcon.style.display = "inline-block";
      moonIcon.style.display = "none";
    } else {
      body.classList.remove("light-mode");
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline-block";
    }

    moonIcon.addEventListener("click", () => {
      body.classList.add("light-mode");
      moonIcon.style.display = "none";
      sunIcon.style.display = "inline-block";
      localStorage.setItem("mode", "light");
    });

    sunIcon.addEventListener("click", () => {
      body.classList.remove("light-mode");
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline-block";
      localStorage.setItem("mode", "dark");
    });
  }
});

  const videos = document.querySelectorAll("video");

  videos.forEach(video => {
    video.addEventListener("play", () => {

      videos.forEach(otherVideo => {
        if (otherVideo !== video) {
          otherVideo.pause();
        }
      });
    });
  });