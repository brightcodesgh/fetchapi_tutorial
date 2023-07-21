//https://superheroapi.com/api/access-token/character-id

const superheroDiv = document.getElementById('superhero');
const superheronameDiv = document.getElementById('superheroname');
const superheroidDiv = document.getElementById('superheroid');
const getNewHero = document.getElementById('getnewhero');
const searchbtn = document.getElementById('searchbutton');
const Search = document.getElementById('search');
const heroStats = document.getElementById('superherostats');




const Token = '297199272761032'
const BASE_URL = `https://superheroapi.com/api.php/${Token}`


const getSuperhero = (id) =>{

    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {

        // console.log(json.powerstats)
   
        const herostat = json;

        superheronameDiv.innerHTML = `<h1>Name: ${json.name}</h1>` 
        superheroDiv.innerHTML = `<img src="${json.image.url}" width=300 height= 300>` ;
        console.log(showHeroinfo(herostat));
        
       
     
        // return json.connections
    })
}
// console.log(getSuperhero(620))

const showHeroinfo = (character) =>{

    const stats = Object.keys(character.powerstats).map(stat =>{
        return   `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
    }).join(' ')

    heroStats.innerHTML = `${stats}`

}




const searchedHero = (name) =>{
    console.log(Search.value);
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {

        const hero = json.results[0];
        
    
        console.log(hero)
      

        
        // console.log(hero);
        superheronameDiv.innerHTML = `<h1>Name: ${hero.name}</h1>` ;
       
        superheroDiv.innerHTML = `<img src="${hero.image.url}" width=300 height= 300> <br>`
        showHeroinfo(hero)

    })
}

searchbtn.onclick = () => searchedHero(Search.value)


const randomHero = () =>{

    const randomhero = 731;
    randomHero_request = Math.floor(Math.random() * randomhero) + 1;
    return randomHero_request;
 
}


getNewHero.onclick = () => {
    getSuperhero(randomHero());
}

