document.getElementById("login-form").addEventListener("submit", event => event.preventDefault())
document.getElementById('name').addEventListener("focus", focus)
document.getElementById('surname').addEventListener("focus", focus)

function login () {
  const name = document.getElementById('name').value.toLowerCase()
  const surname = document.getElementById('surname').value.toLowerCase()
  const age = document.getElementById('age').checked
  const login = document.getElementById('login')
  const avatar = document.getElementById('avatar')
  const user = document.getElementById('user')

  if ((name != "admin")&&(name != "login")) {
    document.getElementById('name').classList.add('incorrect')
  }

  if (surname != "admin") {
    document.getElementById('surname').classList.add('incorrect')
  }


  if (((name === "admin")||(name === "login")) && surname === "admin" && age) {
    login.classList.add('active')
    avatar.classList.add('active')
    user.classList.add('active')
  }
}

function focus(event) {
  event.target.classList.remove("incorrect")
}
