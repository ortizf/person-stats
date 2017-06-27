console.log("It worked!")
console.log("I like soccer.")

function handleSubmit(ev) {
  ev.preventDefault()

  const f = ev.target
  const name = f.personName.value
  const stat = document.querySelector("#addName")
  const age = f.personAge.value
  const color = f.favColor.value

  const p = document.createElement('p')
  p.textContent = name + " is " + age + " year(s) old! Favorite color is " + color + "."
  p.style.color = color
  
  stat.appendChild(p)

  //stat.innerHTML = name + " is " + age + " years old! Favorite color is " + color + "."
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)