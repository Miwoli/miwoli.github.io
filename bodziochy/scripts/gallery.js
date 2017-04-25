const images = document.querySelectorAll('.image')                              //przypisanie do zmiennnej każdego elementu z klasą ".image"
images.forEach((image) => {                                                     //Pętla
  image.addEventListener('click', handleClick2)                                 //Na każdy obrazek dodaj nasłuchiwanie na kliknięcie
})

function handleClick2 () {                                                      //funkcja
  const source = this.getAttribute('src')                                       //zapisz do zmiennej źródło klikniętego obrazka
  console.log(source)                                                           //wyświetl źródło (pozostałości po debuggu)
  const preview = document.getElementById('prev')                               //przypisz do zmiennej rzecz z id "prev"
  console.log(preview)

  preview.setAttribute("src", source)                                           //ustaw atrybut preview "src" na źródło

  document.getElementById('prev-cont').classList.add('active')                  //dodaj klasę "active" na podgląd
}

document.getElementById('prev-cont').addEventListener('click', handleClick3)    //nasłuchuj na kontenerze podglądu na kliknięcie

function handleClick3 () {                                                      //funkcja
  this.classList.remove('active')                                               //usuń klasę "active" z klikniętego obiektu
}
