import { fetchCat } from "./voteData.js";
import { fetchDog } from "./voteData.js";
import { getCat } from "./voteData.js";
import { getDog } from "./voteData.js";



const renderCatToDOM = () => {
    let html = `
    <article>
        <section class="card">
        <img src="${getCat()[0].url}" alt="image" class="image">
    </section>
    </article>`;
document.getElementById("cat").innerHTML = html
}

const displayCat = async () => {
    const catData = await fetchCat()
    renderCatToDOM(catData)
}

const displayDog = async () => {
    const dogData = await fetchDog()
    renderDogToDOM(dogData)
}

const renderDogToDOM = () => {
    let html = `
    <article>
        <section class="card">
        <img src="${getDog()[0].url}" alt="image" class="image">
    </section>
    </article>`;
document.getElementById("dog").innerHTML = html
}

displayDog()
displayCat()