const catAPI = "https://api.thecatapi.com/v1/images/search"
const dogAPI = "https://api.thedogapi.com/v1/images/search"

export const fetchCat = async () => {
    const dataFetch = await fetch(`${catAPI}`)
    const jsonCat = await dataFetch.json()
    return jsonCat
}

export const fetchDog = async () => {
    const dataFetch = await fetch(`${dogAPI}`)
    const jsonDog = await dataFetch.json()
    return jsonDog
}