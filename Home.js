const counter = document.querySelector(".view-count")

async function updateCounter() {
    const options = {
        method: 'GET',
        mode: 'no-cors'
    }
    let response = await fetch("https://9vp9kcfya9.execute-api.us-east-1.amazonaws.com/prod/incrementViewCount")
    let data = await response.json()
    counter.innerHTML = `${data}`
}