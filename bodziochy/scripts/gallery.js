const images = document.querySelectorAll('.image')
images.forEach((image) => {
  image.addEventListener('click', handleClick2)
})

function handleClick2 () {
  const source = this.getAttribute('src')
  console.log(source)
  const preview = document.getElementById('prev')
  console.log(preview)

  preview.setAttribute("src", source)

  document.getElementById('prev-cont').classList.add('active')
}

document.getElementById('prev-cont').addEventListener('click', handleClick3)

function handleClick3 () {
  this.classList.remove('active')
}
