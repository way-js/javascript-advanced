const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
    name: 'Danila',
    age: 20
}

// localStorage.setItem('person', JSON.stringify(object))

// const raw = localStorage.getItem('person')
// const person = JSON.parse(raw)
// person.name = 'Danila'

// console.log(person)
/// =================

window.addEventListener('storage', event => {
    console.log(event)
})

// window.onstorage = () => {}