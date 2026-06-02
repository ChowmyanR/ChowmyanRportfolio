function scrollProjects() {

  document.getElementById('projects').scrollIntoView({
    behavior: 'smooth'
  });
}


// VIDEO PLAY ON HOVER
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {

  const video = card.querySelector('video');

  card.addEventListener('mouseenter', () => {
    video.play();
  });

  card.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

});
