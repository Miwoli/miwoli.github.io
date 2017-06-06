const slides = [
  'images/img-1.jpg',
  'images/img-2.jpg',
  'images/img-3.jpg'
]

let currentSlide = 0

document.getElementById('slider-img').src = slides[currentSlide]

document.getElementById('arr-right').addEventListener('click', function () {
  if (currentSlide == 2) {
    currentSlide = 0
    document.getElementById('slider-img').src = slides[currentSlide]
  } else {
    currentSlide +=1
    document.getElementById('slider-img').src = slides[currentSlide]
  }
})

document.getElementById('arr-left').addEventListener('click', function () {
  if (currentSlide == 0) {
    currentSlide = 2
    document.getElementById('slider-img').src = slides[currentSlide]
  } else {
    currentSlide -=1
    document.getElementById('slider-img').src = slides[currentSlide]
  }
})
