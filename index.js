console.log("It worked!");
console.log("I like soccer.");

function handleSubmit(ev) {
  ev.preventDefault()

  const f = ev.target
  const name = f.personName.value
  const stat = document.querySelector("#addName")
  const age = f.personAge.value
  p.innerHTML = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)