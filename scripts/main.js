import { fetchCat, getDogScore, getCatScore, fetchDogScore, fetchCatScore, getDog, getCat, fetchDog, sendCatScoreToAPI, sendDogScoreToAPI } from "./voteData.js";

const catContainer = document.querySelector("#catPic")
const dogContainer = document.querySelector("#dogPic")

catContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "catPic") {

        // Make an object out of the user input
        const dataToSendToAPI = {
            catVote: 1
        }

        // Send the data to the API for permanent storage
        sendCatScoreToAPI(dataToSendToAPI)
    }
})

dogContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "button") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendDogScoreToAPI(dataToSendToAPI)
    }
})

const displayCat = async () => {
    const catData = await fetchCat()
    renderCatToDOM(catData)
}

const displayDog = async () => {
    const dogData = await fetchDog()
    renderDogToDOM(dogData)
}

const displayCatScore = async () => {
    const catData = await fetchCatScore()
    renderCatScoreToDOM(catData)
}

const displayDogScore = async () => {
    const catData = await fetchDogScore()
    renderDogScoreToDOM(catData)
}

const renderCatScoreToDOM = () => {
    let html = `
    <article>
        <section class="card">
    <div>${getCatScore()}</div>
    </section>
    </article>`;
document.getElementById("catScore").innerHTML = html
}

const renderDogScoreToDOM = () => {
    let html = `
    <article>
        <section class="card">
        <div>${getDogScore()}</div>
    </section>
    </article>`;
document.getElementById("dogScore").innerHTML = html
}


const renderCatToDOM = () => {
    let html = `
    <article>
        <section class="card">
        <img src="${getCat()[0].url}" alt="image" class="image" id ="catPic">
    </section>
    </article>`;
document.getElementById("cat").innerHTML = html
}

const renderDogToDOM = () => {
    let html = `
    <article>
        <section class="card">
        <img src="${getDog()[0].url}" alt="image" class="image">
        <button onclick="pushDog" type="button" id="button">Dogs!!!</button>
    </section>
    </article>`;
document.getElementById("dog").innerHTML = html
}

displayDog()
displayCat()
displayCatScore()
displayDogScore()