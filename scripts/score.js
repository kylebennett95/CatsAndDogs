import { fetchCat, fetchDog } from "./voteData.js";
import { fetchDog} from "./voteData.js";
import { renderCatScoreToDOM, renderDogScoreToDOM } from "./main.js"
import { addCat, addDog } from "./voteData.js";



const catContainer = document.querySelector("#catPic")


const scoreCat = async () => {
    let renderCat = await renderCatScoreToDOM()
}

const scoreDog = async () => {
    let renderDog = await renderDogScoreToDOM()
}


catContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "catPic") {
       
      // 1 get the specific object that relates to the image
      let scoreCat = scoreCat()

      addCatDog(scoreCat);
        
      // 2 push that object into the api

    
    } else if (clickEvent.target.id === "dogPic") { 

        let scoreDog = scoreDog()

        return scoreDog;

    } else { 

        return "error";

    }

    getCat(dataToSendToAPI)
    getDog(dataToSendToAPI)

})


