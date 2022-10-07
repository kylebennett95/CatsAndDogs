const catAPI = "https://api.thecatapi.com/v1/images/search"
const dogAPI = "https://api.thedogapi.com/v1/images/search"

const applicationState = {
    dogs: [],
    cats: []
}


// fetch commands go to the API 
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

export const getCat = () => {
    return applicationState.cats.map((x) => ({ ...x }));
}

export const getDog = () => {
    return applicationState.dogs.map((x) => ({ ...x }));
}