var defaultImageSrc = "./36days- E.gif"; // Specify the path to the default image

function displayImage(src) {
  var displayedImage = document.getElementById("displayed-image");
  displayedImage.src = src;
}

window.addEventListener("load", function() {
  var zoomText = document.getElementById("zoom-text");
  setTimeout(function() {
    zoomText.classList.add("hide");
  }, 1000);
});
