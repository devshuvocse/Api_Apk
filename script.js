const downloadBtn = document.getElementById('downloadBtn');
const statusText = document.getElementById('statusText');

if (downloadBtn && statusText) {
  downloadBtn.addEventListener('click', () => {
    statusText.textContent = 'ডাউনলোড শুরু হয়েছে... (Downloading...)';
    statusText.style.color = '#60a5fa';
  });
}
