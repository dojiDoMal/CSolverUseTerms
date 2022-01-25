function changeActive(e) {
  if (document.querySelector('.nav a.active') !== null) {
    document.querySelector('.nav a.active').classList.remove('active');
  }
  e.target.className = "active";
}

document.querySelectorAll('div.nav a')
  .forEach(e => e.addEventListener('click', _ => change(e.dataset.id)))


function change(n) {
  let panels = document.querySelectorAll('main div')
  panels.forEach(p => p.classList.remove('active'))
  panels[n - 1].classList.add('active')
}