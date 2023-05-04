const progressBar = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress-container');

const updateProgressBar = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = `${(scrollTop / scrollHeight) * 100}%`;
  progressBar.style.width = scrolled;
};

window.addEventListener('scroll', updateProgressBar);