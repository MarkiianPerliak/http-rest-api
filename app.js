const searcher = document.querySelector(".searcher")
const submit = document.querySelector(".submit-search")

let number = 0;

function createText(data) {
    number++
    console.log(data)
    const htmldata = `
    <div class="country-box-${number} country-box">
                <div class="line"></div>
        <div class="flexbox">
            <div class="leftside">
                <img class="coolherb" src="${data[0].coatOfArms.png}" alt="Image">
            </div>
                    <div class="line-block"></div>
            <div class="rightside">
    <h2 data-text="Name: ${data[0].name.official}" class="name">Name: ${data[0].name.official}</h2>
    <p data-text="Capital: ${data[0].capital}" class="capital">Capital: ${data[0].capital}</p>
    <p data-text="Languages: ${data[0].languages}" class="languages">Languages: ${data[0].languages}</p>
    <p data-text="Currencies: ${data[0].currencies.name}" class="currencies">Currencies: ${data[0].currencies.name}</p>
    <p data-text="Population: ${data[0].population}""class="Population">Population: ${data[0].population}</p>
    <p data-text="Continent: ${data[0].continents}" class="continent">Continent: ${data[0].continents}</p>
    <p data-text="Area: ${data[0].area}km²" class="square-km">Area: ${data[0].area}km²</p>
            </div>
        </div>
        <div class="line"></div>
    </div>
    `
    document.body.insertAdjacentHTML("beforeEnd", htmldata)
    const backgroundcolorsettggs = document.querySelector(`.country-box-${number}`);
    backgroundcolorsettggs.style.backgroundImage = `url(${data[0].flags.png})`;
}

submit.addEventListener("click", (event) => {
    if (searcher.value === "") {
        alert("nuh uh")
    } else {
    const name = document.querySelector(".searcher").value
    function getAPI() {
        return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    }
    getAPI().then((result) => result.json()).then((resultdata) => createText(resultdata))
    }
})


// coatOfArms
// : 
// png
// : 
// "https://mainfacts.com/media/images/coats_of_arms/ua.png"
// svg
// : 
// "https://mainfacts.com/media/images/coats_of_arms/ua.svg"
// [[Prototype]]
// : 
// Object
// continents
// : 
// ['Europe']
// currencies
// : 
// {UAH: {…}}
// demonyms
// : 
// {eng: {…}, fra: {…}}
// fifa
// : 
// "UKR"
// flag
// : 
// "🇺🇦"
// flags
// : 
// alt
// : 
// "The flag of Ukraine is composed of two equal horizontal bands of blue and yellow."
// png
// : 
// "https://flagcdn.com/w320/ua.png"
// svg
// : 
// "https://flagcdn.com/ua.svg"