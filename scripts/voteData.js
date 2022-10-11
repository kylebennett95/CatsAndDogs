const catAPI = "https://api.thecatapi.com/v1/images/search"
const dogAPI = "https://api.thedogapi.com/v1/images/search"
const scoreAPI = "http://localhost:8088"

const applicationState = {
    dogs: [],
    cats: [],
    dogVote: [],
    catVote: []
}


// fetch commands go to the API
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

export const getCatScore = () => {
    return applicationState.catVote.length;
}

export const getDogScore = () => {
    console.log(typeof applicationState.dogVote.length)
    return applicationState.dogVote.length;
}

export const getCat = () => {
    return applicationState.cats.map((x) => ({ ...x }));
}

export const getDog = () => {
    return applicationState.dogs.map((x) => ({ ...x }));
}

export const addCat = async (catObj) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    };
    const response = await fetch(`${scoreAPI}/cats`, requestOptions);
  
    console.log(response);
  
    document.dispatchEvent(new CustomEvent("stateChanged"));
  }

  export const addDog = async (dogObj) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    };
    const response = await fetch(`${scoreAPI}/dogs`, requestOptions);
  
    console.log(response);
  
    document.dispatchEvent(new CustomEvent("stateChanged"));
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