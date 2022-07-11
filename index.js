async function getAPIs() {
    const response = await fetch("https://api.publicapis.org/entries")
    const data = await response.json()
    return data.entries //.slice(2, 8)
}

function getAPIhtml(myAPI) {
    return `
        <div class="my-api">
            <a target="blank" href="${myAPI.Link}" class="my-api-name"><h2>${myAPI.API} (${myAPI.Category})</h2></a>
            <p class="my-api-description">Description: ${myAPI.Description}</p>
            <p class="my-api-auth">Auth: ${myAPI.Auth}</p>
            <p class="my-api-https">HTTPS: ${myAPI.HTTPS}</p>
        </div>
    `
}

function displayAPIs(myAPIs) {
        document.body.innerHTML += myAPIs.map(API => {
           return getAPIhtml(API)
        }).join("")
}

getAPIs()
    .then(displayAPIs)
    .catch(e => console.log(`Error: ${e}`))