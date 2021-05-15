if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  console.log('test');
  document.body.innerHTML = `<p>So sorry!<br> <br> This demo project can only be viewed from a desktop computer</p>`;
}

window.onload = function () {
  document.getElementById('hideAll').style.display = 'none';
};
