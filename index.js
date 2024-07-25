let joke = "Ceci est ma blague"
const p = document.querySelector("#joke")
const button = document.querySelector('#refresh')

async function getJoke() {
    let response = await fetch('https://chuckn.neant.be/api/rand')
    response = await response.json()
    p.textContent = response.joke
}
button.addEventListener('click', getJoke)
getJoke()