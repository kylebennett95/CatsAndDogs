import { fetchCat, getDogScore, getCatScore, fetchDogScore, fetchCatScore, getDog, getCat, fetchDog, sendCatScoreToAPI, sendDogScoreToAPI } from "./voteData.js";


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
        <button onclick="pushCat" type="button" id="catButton">Cats!!!</button>
    </section>
    </article>`;
  document.getElementById("cat").innerHTML = html;
};

const renderDogToDOM = () => {
  let html = `
    <article>
        <section class="card">
        <img src="${getDog()[0].url}" alt="image" class="image">
        <button onclick="pushDog" type="button" id="dogButton">Dogs!!!</button>
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

