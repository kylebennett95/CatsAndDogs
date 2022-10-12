import { fetchCat, getDogScore, getCatScore, fetchDogScore, fetchCatScore, getDog, getCat, fetchDog, sendCatScoreToAPI, sendDogScoreToAPI } from "./voteData.js";

const catContainer = document.querySelector("#catPics");
const dogContainer = document.querySelector("#dogPics");

catContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "catPics") {
    // Make an object out of the user input
    const dataToSendToAPI = {
      catVote: 1,
    };

    // Send the data to the API for permanent storage
    sendCatScoreToAPI(dataToSendToAPI);
  }
});

dogContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "dogPics") {
    // Make an object out of the user input
    const dataToSendToAPI = {
      dogVote: 1,
    };

    // Send the data to the API for permanent storage
    sendDogScoreToAPI(dataToSendToAPI);
  }
});

const displayCat = async () => {
  const catData = await fetchCat();
  renderCatToDOM(catData);
};

const displayDog = async () => {
  const dogData = await fetchDog();
  renderDogToDOM(dogData);
};

const displayCatScore = async () => {
  const catData = await fetchCatScore();
  renderCatScoreToDOM(catData);
};

const displayDogScore = async () => {
  const catData = await fetchDogScore();
  renderDogScoreToDOM(catData);
};

const renderCatScoreToDOM = () => {
  let html = `
    <article>
        <section class="card">
    <div>${getCatScore()}</div>
    </section>
    </article>`;
  document.getElementById("catScore").innerHTML = html;
};

const renderDogScoreToDOM = () => {
  let html = `
    <article>
        <section class="card">
        <div>${getDogScore()}</div>
    </section>
    </article>`;
  document.getElementById("dogScore").innerHTML = html;
};

const renderCatToDOM = () => {
  let html = `
    <article>
        <section class="card">
        <img src="${getCat()[0].url}" alt="image" class="image" id ="catPic">
    </section>
    </article>`;
  document.getElementById("cat").innerHTML = html;
};

const renderDogToDOM = () => {
  let html = `
    <article>
        <section class="card">
        <img src="${getDog()[0].url}" alt="image" class="image">
        <button onclick="pushDog" type="button" id="button">Dogs!!!</button>
    </section>
    </article>`;
  document.getElementById("dog").innerHTML = html;
};

const render = async () => {
  await displayDog();
  await displayCat();
  await displayCatScore();
  await displayDogScore();
};

render();

document.addEventListener("stateChanged", (e) => {
  render();
});
