const fnc_1 = {
  src: "images/fnc_1.jpg",
  price: 10
}

const fnc_2 = {
  src: "images/fnc_2.jpg",
  price: 20
}

const fnc_3 = {
  src: "images/fnc_3.jpg",
  price: 30
}

let fence = document.getElementById('fence-list')
fence.addEventListener('change', function () {
  if (fence.value == "fence-1") {
    document.getElementById('img').src = fnc_1.src
    document.getElementById('price').value = fnc_1.price
  }

  if (fence.value == "fence-2") {
    document.getElementById('img').src = fnc_2.src
    document.getElementById('price').value = fnc_2.price
  }

  if (fence.value == "fence-3") {
    document.getElementById('img').src = fnc_3.src
    document.getElementById('price').value = fnc_3.price
  }
})

document.getElementById('submit').addEventListener('click', function () {
  let price = document.getElementById('price').value
  let meters = document.getElementById('meters').value
  let overall = document.getElementById('overall')
  overall.value = price * meters
})

document.getElementById('img').addEventListener('click', function () {
  this.classList.toggle('active')
})
