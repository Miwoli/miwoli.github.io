

  const links = document.querySelectorAll('.nav-a')
  links.forEach((link) => {
    link.addEventListener('click', handleClick)
  })

  function handleClick(evt) {
    evt.preventDefault()

    const target = this.getAttribute('data-id')
    const sections = document.querySelectorAll('.section')

    sections.forEach(section => section.classList.add('hidden'))
    document.getElementById(target).classList.remove('hidden')
    document.getElementById('nav-bar').classList.remove('active')
    
  }
  
  
    document.querySelector('body').addEventListener('click', hideNavBar)
  
    function hideNavBar (event) {
    if (!document.getElementById('nav-bar').classList.contains('active')) {
      return
    }
    
    console.log(event.target)
    if (!event.target.classList.contains('nav-a') && !event.target.classList.contains('nav-btn')) {
      document.getElementById('nav-bar').classList.remove('active')
    }
  }
