function toggleMenu() {
  const menuContent = document.getElementById('menuContent');
  menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
}

function navigate(path) {
  document.getElementById('loadingOverlay').style.display = 'flex'; 
  setTimeout(() => {
    window.location.href = path;
  }, 1000); 
}

function showLoading() {
  document.getElementById('loadingOverlay').style.display = 'flex'; 
  setTimeout(() => {
    document.getElementById('loadingOverlay').style.display = 'none'; 
  }, 1000);
}
