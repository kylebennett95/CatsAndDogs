const catAPI = "https://api.thecatapi.com/v1/images/search"
const dogAPI = "https://api.thedogapi.com/v1/images/search"
const scoreAPI = "http://localhost:8088"

const applicationState = {
    dogs: [],
    cats: [],
    dogVote: [],
    catVote: []
}


// fetch functions get data from the API's, turn them into js readable code and put them into the application state object
export const fetchCatScore = async () => {
    const dataFetch = await fetch(`${scoreAPI}/catVote`)
    const jsonCatScore = await dataFetch.json()
    applicationState.catVote = jsonCatScore;
}

export const fetchDogScore = async () => {
    const dataFetch = await fetch(`${scoreAPI}/dogVote`)
    const jsonDogScore = await dataFetch.json()
    applicationState.dogVote = jsonDogScore;
}
 
export const fetchCat = async () => {
    const dataFetch = await fetch(`${catAPI}`)
    const jsonCat = await dataFetch.json()
    applicationState.cats = jsonCat;
}

export const fetchDog = async () => {
    const dataFetch = await fetch(`${dogAPI}`)
    const jsonDog = await dataFetch.json()
    applicationState.dogs = jsonDog;
}

//get functions go into the application state and return the data in the .map or .length format we ask for
export const getCatScore = () => {
    return applicationState.catVote.length;
}

export const getDogScore = () => {
    return applicationState.dogVote.length;
}

export const getCat = () => {
    return applicationState.cats.map((x) => ({ ...x }));
}

export const getDog = () => {
    return applicationState.dogs.map((x) => ({ ...x }));
}

export const sendCatScoreToAPI = async (vote) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vote)
    }
  
    const catContainer = document.querySelector("#container");
    const response = await fetch(`${scoreAPI}/catVote`, fetchOptions);
    const responseJson = await response.json();
    catContainer.dispatchEvent(new CustomEvent("stateChanged"));
    return responseJson;
  }

  export const sendDogScoreToAPI = async (vote) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(vote)
    }
  
    const dogContainer = document.querySelector("#container");
    const response = await fetch(`${scoreAPI}/dogVote`, fetchOptions);
    const responseJson = await response.json();
    dogContainer.dispatchEvent(new CustomEvent("stateChanged"));
    return responseJson;
  }


//UNTESTED CODE BELOW
// export const pushDog = () => {
//     applicationState.dogVote.push();
//     document.getElementById("dogScore").innerHTML
// }

// export const pushCat = () => {
//     applicationState.catVote.push();
//     document.getElementById("catScore").innerHTML
// }

// const mainContainer = document.querySelector("#container")

//when click, event listener should add one to the number below. Then that has to render. It also has to render and update on the scoreboard