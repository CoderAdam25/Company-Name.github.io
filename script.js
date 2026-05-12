const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});






btn.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause"; // Update button text
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
});

const btn = document.getElementById("playBtn");
btn.addEventListener("click", function() {
  console.log("Button was clicked!"); // Look for this in your browser console
});


const list = document.querySelectorAll(".list")
const nav = document.querySelector(".navigation");

list.forEach(item => item.addEventListener("click", function(e){

    list.forEach(li => li.classList.remove("active"));
    e.currentTarget.classList.add("active");

}))

