console.log("It worked!")
console.log("I like soccer.")

function handleSubmit(ev) {
  ev.preventDefault()

  const f = ev.target
  const name = f.personName.value
  const stats = document.querySelector("#stats")
  const age = f.personAge.value
  const color = f.favColor.value
  
  stats.appendChild(renderList(name, age, color))
}

//render a div color
function renderColor(color) {
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

//function that creates a list item
function renderListItem(title, item) {
  const listItem = document.createElement('li')
  if (title == 'Favorite Color') {
    listItem.textContent = title + ": "
    listItem.appendChild(renderColor(item))
  } else {
    listItem.textContent = title + ": " + item
  }
  return listItem
}

//function that creates a list
function renderList(item1, item2, item3) {
  const newList = document.createElement('ul')
  newList.appendChild(renderListItem("Name", item1))
  newList.appendChild(renderListItem("Age", item2))
  newList.appendChild(renderListItem("Favorite Color", item3))

  return newList
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)