document.getElementById("login-form").addEventListener("submit", event => event.preventDefault())   //Nasłuchuje na kliknięcie "Submita". Kiedy kliknięty blokuje wykonanie domyślnej akcji (w tym wypadku odświeżenia strony)
document.getElementById('name').addEventListener("focus", focus)                                    //Nasłuchuje na focus na pole login z formularza logowania. Jak złapie focus to wykonuje funkcję "focus"
document.getElementById('surname').addEventListener("focus", focus)                                 //To samo co wyżej, tylko na pole z hasłem.

function login () {                                                                                 //Funkcja login
  const name = document.getElementById('name').value.toLowerCase()                                  //Pobiera wartości z pól i sprowadza je do małych literek, a potem wbija do zmiennych.
  const surname = document.getElementById('surname').value.toLowerCase()                            //To samo co wyżej
  const age = document.getElementById('age').checked                                                //Sprawdza czy checkbox jest zaznaczony, jeżeli jest to do zmiennej wbija true, jak nie to false
  const login = document.getElementById('login')                                                    //Wbija do zmiennej rzeczy z navbara (bardziej dla wygody później niż jako coś praktycznego)
  const avatar = document.getElementById('avatar')                                                  //^
  const user = document.getElementById('user')                                                      //^

  if ((name != "admin")&&(name != "login")) {                                                       //Jeżeli login nie równa się admin albo login
    document.getElementById('name').classList.add('incorrect')                                      //to dodaje do loginu klasę "incorrect"
  }

  if (surname != "admin") {                                                                         //Jeżeli hasło nie równa się admin
    document.getElementById('surname').classList.add('incorrect')                                   //to dodaje do hasła klasę "incorrect"
  }


  if (((name === "admin")||(name === "login")) && surname === "admin" && age) {                     //Jeżeli login to admin lub login, hasło to admin i checkbox jest zaznaczony
    login.classList.add('active')                                                                   //Dodaje klasę "active" do loginu
    avatar.classList.add('active')                                                                  //Dodaje klasę "active" do loga
    user.classList.add('active')                                                                    //Dodaje klasę "active" do nazwy projektu
  }
}

function focus(event) {                                                                             //funkcja "focus"
  event.target.classList.remove("incorrect")                                                        //Ściąga z celu nasłuchiwania klasę"incorrect"
}
