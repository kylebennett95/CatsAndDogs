import { fetchCat } from "./voteData.js";
import { fetchDog } from "./voteData.js";

const displayCat = async () => {
    const catData = await fetchCat()
    renderCatToDOM(catData)
}

const renderCatToDOM = (catData) => {
    let html = `
    <article>
        <section class="card">
        <img src="${catData.primaryImageSmall}" alt="image">
    </section>
    </article>`;
document.getElementById("cat").innerHTML = html
}

const displayDog = async () => {
    const dogData = await fetchDog()
    renderDogToDOM(dogData)
}

const renderDogToDOM = (dogData) => {
    let html = `
    <article>
        <section class="card">
        <img src="${dogData.primaryImageSmall}" alt="image">
    </section>
    </article>`;
document.getElementById("dog").innerHTML = html
}

displayDog()
displayCat()