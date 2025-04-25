const button1 = document.getElementById("showImage1");//priviuos button
const button2 = document.getElementById("showImage2");//next image
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

button1.addEventListener('click', function () {
    image1.style.display = "block";
    image2.style.display = "none";
});
button2.addEventListener('click', function () {
    image1.style.display = "none";
    image2.style.display = "block";
});