import { sendCatScoreToAPI, sendDogScoreToAPI } from "./main.js";

const catContainer = document.querySelector("#catButton");
const dogContainer = document.querySelector("#dog");

catContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cat") {
    // Make an object out of the user input
    const dataToSendToAPI = {
      catVote: 1,
    };

    // Send the data to the API for permanent storage
    sendCatScoreToAPI(dataToSendToAPI);
  }
});

dogContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "dog") {
    // Make an object out of the user input
    const dataToSendToAPI = {
      dogVote: 1,
    };

    // Send the data to the API for permanent storage
    sendDogScoreToAPI(dataToSendToAPI);
  }
});
