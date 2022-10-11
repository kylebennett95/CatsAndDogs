import { fetchCat } from "./voteData.js";
import { fetchDog} from "./voteData.js";

const catContainer = document.querySelector("#catPic")


const scoreCat = async () => {
    let fetchCat = await fetchCat()
}

const addOne = () => {

}


catContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "catPic") {
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
        sendRequest(dataToSendToAPI)
    }
})
