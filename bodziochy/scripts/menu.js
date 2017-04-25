  const links = document.querySelectorAll('.nav-a')                                                         //Przypisanie do zmiennej wszystkich elementów z klasą "nav-a"
  links.forEach((link) => {                                                                                 //Pętla dodająca do każdego elementu
    link.addEventListener('click', handleClick)                                                             //nasłuchiwanie na kliknięcie odpalające funkcję "handleClick"
  })

  function handleClick(evt) {                                                                               //Funkcja
    const target = this.getAttribute('data-id')                                                             //wbija do zmiennej z celu nasłuchiwania "data-id"
    const sections = document.querySelectorAll('.section')                                                  //wbija do zmiennej wszystkie obiekty z klasą section

    sections.forEach(section => section.classList.add('hidden'))                                            //Nadaje każdej sekcji klasę ".hidden"
    document.getElementById(target).classList.remove('hidden')                                              //Usuwa klasę ".hidden"
    document.getElementById('nav-bar').classList.remove('active')                                           //Usuwa klasę ".active"

  }


    document.querySelector('body').addEventListener('click', hideNavBar)                                    //Nasłuchuje na body na kliknięcie

    function hideNavBar (event) {                                                                           //funkcja
    if (!document.getElementById('nav-bar').classList.contains('active')) {                                 //jeżeli cel kliknięcia nie jest "nav-barem" zawierającym klasę "active"
      return                                                                                                //przerwij działanie funkcji
    }

    console.log(event.target)                                                                               //wypisz do konsoli cel kliknięcia (pozostałości po debuggu)
    if (!event.target.classList.contains('nav-a') && !event.target.classList.contains('nav-btn')) {         //Jeżeli cel kliknięcia nie zawiera klasy "nav-a" ani "nav-btn"
      document.getElementById('nav-bar').classList.remove('active')                                         //Usuń klasę "active" z "nav-bara"
    }
  }
