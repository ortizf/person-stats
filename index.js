console.log("It worked!")
console.log("I like soccer.")

function handleSubmit(ev) {
  ev.preventDefault()

  const f = ev.target
  const name = f.personName.value
  const stat = document.querySelector("#addName")
  const age = f.personAge.value
  const color = f.favColor.value

  const list = document.createElement('ul')

  const nameItem = document.createElement('li')
  nameItem.textContent = "Name: " + name
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  ageItem.textContent = "Age: " + age
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  colorItem.textContent = "Favorite Color: " + color
  list.appendChild(colorItem)

  /*list.textContent = name + " is " + age + " year(s) old! Favorite color is " + color + "."
  list.style.color = color*/
  
  stat.appendChild(list)

  //stat.innerHTML = name + " is " + age + " years old! Favorite color is " + color + "."
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)