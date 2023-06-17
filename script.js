var defaultImageSrc = "./36days- E.gif"; // Specify the path to the default image

function displayImage(src) {
  var displayedImage = document.getElementById("displayed-image");
  displayedImage.src = src;
}

// Set the default image on page load
window.addEventListener("load", function() {
  displayImage(defaultImageSrc);
});
