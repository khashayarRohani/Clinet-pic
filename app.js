const imageContainer = document.getElementById("ImageContainer");
async function getImages() {
  const response = await fetch("https://server-pic.onrender.com");
  const Imgdata = await response.json();
  const keys = Object.keys(Imgdata);
  for (let i = 0; i < keys.length; i++) {
    const img = document.createElement("img");
    img.src = Imgdata[keys[i]];
    imageContainer.appendChild(img);
  }
}

getImages();
