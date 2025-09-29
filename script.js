function changeImage(productId, color) {
  const mainImg = document.getElementById("main-" + productId);
  mainImg.src = "img/" + productId + "-" + color + ".jpg";
}
