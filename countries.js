
const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => display(data))
    
}
 let serial = 0;
const display  = countries =>{
    // console.log(countries)
    const countriesContainer =  document.getElementById('all-countris')
    // for(const country of countries){
    //     console.log(country)
    // }
   
    countries.forEach(country => {
        console.log(country.cca2)
        
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        serial +=1;
        countryDiv.innerHTML = `
        <h3>serial: ${serial}</h3>
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'no capital' }</p>
        <button onclick="loadContainerDetails('${country.cca2}')"> Details </button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}

loadCountry()
const loadContainerDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))
    
}

const showCountryDetails = country => {
    const detailContainer = document.getElementById('country-detail');
    detailContainer.innerHTML = `
    <h3>Name:${country.name.common}</h3>
    <img src= "${country.flags.png}">
    `

}

