
var modal = document.getElementById("selModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("selImg");
var captionText = document.getElementById("caption");
function expand(image){
  modal.style.display = "block";
  modalImg.src = image.src;
  captionText.innerHTML = image.alt;
}

// Get the <span> element that closes the modal
var exit = document.getElementsByClassName("fas fa-times")[0];

// When the user clicks on <span> (x), close the modale
exit.onclick = function() {
  modal.style.display = "none";
}
