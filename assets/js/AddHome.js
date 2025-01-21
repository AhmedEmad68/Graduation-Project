function loadImage() {
  const fileInput = document.getElementById("imageFileInput");
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    const img = document.createElement("img");
    img.src = reader.result;
    document.body.appendChild(img);
  };
}
