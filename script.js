let currentIndex = 0;
const images = ['image1.png', 'image2.png', 'image3.png']; // Replace with your image paths

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('slideImage').src = images[currentIndex];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
