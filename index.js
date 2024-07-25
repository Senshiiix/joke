let joke = "Ceci est ma blague"
const p = document.querySelector("#joke")
const button = document.querySelector('#refresh')

async function getJoke() {
    let response = await fetch('https://api.quotable.io/random')
    response = await response.json()
    p.textContent = response.content
}
button.addEventListener('click', getJoke)
getJoke()